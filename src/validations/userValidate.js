import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  emailOrMobile: Joi.alternatives().try(
    Joi.string()
      .email({ tlds: ['com', 'net'] })
      .required(),
    Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/) //begin 0-9 and have > 1 item
      .required()
  ),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$')).required(),
  confirmPassword: Joi.ref('password'),
}).with('password', 'confirmPassword');

export const validateRegister = (input) =>
  registerSchema.validate(input, { abortEarly: false });
