import { Router } from "express";
import * as testsController from "../controllers/testsController";
import * as schemaValidator from "../middlewares/schemaValidatorMiddleware";
import * as testsSchema from "../schemas/testsSchema";
import { tokenValidator } from "../middlewares/tokenValidatorMiddleware";

const TestsRouter = Router();
const PATH = "/tests";

TestsRouter.use(tokenValidator);
TestsRouter.post(
  `${PATH}/submit`,
  schemaValidator.body(testsSchema.testsSchema),
  testsController.insert
);

export default TestsRouter;
