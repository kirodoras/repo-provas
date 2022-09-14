import { Router } from "express";
import * as usersController from "../controllers/users.controller";
import * as schemaValidator from "../middlewares/schemaValidator.middleware";
import * as usersSchema from "../schemas/users.schema";

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
