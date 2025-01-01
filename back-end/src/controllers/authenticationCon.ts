import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import purify from '../utils/sanitize';
import { generateAccessToken } from '../utils/tokenUtils';
import { emailValidation, passwordValidation, userAuthenticationValidation } from '../validations/userValidations';
import crypto from 'crypto';
import sendEmail from '../utils/sendEmail';



// Register a new user
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  Object.keys(req.body).forEach(key => {
    req.body[key] = purify.sanitize(req.body[key]);
  });

  const { error } = userAuthenticationValidation.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const userInstance = await User.findOne({email: req.body.email});
  if (userInstance) {
    res.status(400).send('User already registered');
    return;
  }

  const salt = await bcrypt.genSalt(10)
  req.body.password = await bcrypt.hash(req.body.password, salt);

  const newUser = await User.create(req.body);

  const tokenProps = {
    id: newUser._id,
    email: newUser.email,
  }

  const token = generateAccessToken(tokenProps as IUser)

  res.cookie("access_token",
              token,
              {httpOnly: true,
                // secure: true   // for https only (production)
              },
            ).status(201).send({message: "User created successfully", user: newUser});
};



// Login a user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  Object.keys(req.body).forEach(key => {
    req.body[key] = purify.sanitize(req.body[key]);
  });

  const { error } = userAuthenticationValidation.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const userInstance = await User.findOne({email: req.body.email});
  if (!userInstance) {
    res.status(400).send("email or password is wrong");
    return;
  }

  const validPassword = await bcrypt.compare(req.body.password, userInstance.password);
  if (!validPassword) {
    res.status(400).send("email or password is wrong");
  }

  const tokenProps = {
    id: userInstance._id,
    email: userInstance.email,
  }

  const token = generateAccessToken(tokenProps as IUser)

  res.cookie("access_token",
    token,
    {httpOnly: true,
      // secure: true   // for https only (production)
    },
  ).status(200).send({message: "User logged in successfully", user: userInstance});
};



// Send forgot password link to email
export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  const email = purify.sanitize(req.body.email);

  const { error } = emailValidation.validate({ email });
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(200).send("Check your email");
    return;
  }

  const token = crypto.randomBytes(20).toString('hex');
  user.resetPasswordToken = token;
  user.resetPasswordExpires = new Date(Date.now() + 900000);
  await user.save();

  const link = `${process.env.SERVER_URL}${process.env.PORT}/authentication/reset-password/${token}`;
  console.log(link)
  const message = `<h4>You requested a password reset</h4>
                   <p>Click <a href = "${link}">this link</a> to reset your password`;
  const isEmailSent = await sendEmail(email, "Password reset request", message);

  if (isEmailSent) {
    res.status(200).send("Check your email");
  }
  else {
    res.status(500).send("Something went wrong");
  }
};



//  Practical function to change password
export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = purify.sanitize(req.params.token);
    let password = purify.sanitize(req.body.password);

    const { error } = passwordValidation.validate({ password });
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
  
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });
  
    if (!user) {
      res.status(401).send("Token is invalid or expired");
      return;
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
  
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
  
    await user.save();
    res.status(200).send("Password reset successful");
  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong");
  }
};
