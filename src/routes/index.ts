import { Router, Request, Response } from "express";
import UsersRouter from "./usersRouter";
import TestsRouter from "./testsRouter";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("Online");
});
router.use(UsersRouter);
router.use(TestsRouter);

export default router;
