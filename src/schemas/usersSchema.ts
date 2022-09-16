import joi from "joi";
import * as usersTypes from "../types/usersTypes";

const signUpSchema = joi.object<usersTypes.IUserSingUp>({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  confirmPassword: joi.string().required().valid(joi.ref("password")),
});

const signInSchema = joi.object<usersTypes.TUser>({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

export { signUpSchema, signInSchema };
