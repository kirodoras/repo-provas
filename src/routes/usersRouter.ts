import { Router } from "express";
import * as usersController from "../controllers/usersController";
import * as schemaValidator from "../middlewares/schemaValidatorMiddleware";
import * as usersSchema from "../schemas/usersSchema";

const UsersRouter = Router();
const PATH = "/users";

UsersRouter.post(
  `${PATH}/signup`,
  schemaValidator.body(usersSchema.signUpSchema),
  usersController.signUp
);

UsersRouter.post(
  `${PATH}/signin`,
  schemaValidator.body(usersSchema.signInSchema),
  usersController.signIn
);

export default UsersRouter;
