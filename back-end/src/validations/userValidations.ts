import Joi from 'joi';



export const userAuthenticationValidation = Joi.object({
    email: Joi.string().min(5).max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'edu'] } })
    .messages({
      'string.email': 'Invalid email format',
    })
    .required(),

    password: Joi.string().min(5).max(255).required()
})



export const passwordValidation = Joi.object({
    password: Joi.string().min(5).max(255).required()
})



export const emailValidation = Joi.object({
  email: Joi.string().min(5).max(50)
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'edu'] } })
  .messages({
    'string.email': 'Invalid email format',
  })
  .required()
})