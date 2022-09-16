import { Router, Request, Response } from "express";
import UsersRouter from "./usersRouter";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("Online");
});
router.use(UsersRouter);

export default router;
