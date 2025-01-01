import mongoose, { Document } from 'mongoose';





const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, minWidth: 5, maxWidth: 50 },
  password: { type: String, required: true },
  refreshToken: { type: String },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});


export interface IUser extends Document {
  email: string;
  password: string;
  refreshToken?: string;
  resetPasswordToken?: string,
  resetPasswordExpires?: Date | string,
}


const User = mongoose.model<IUser>('User', userSchema);



export default User;