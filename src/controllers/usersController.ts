import { Request, Response } from "express";
import * as usersServices from "../services/usersService";
import * as usersTypes from "../types/usersTypes";

export async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;
  const user: usersTypes.TUser = { email, password };
  await usersServices.signUp(user);
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const user: usersTypes.TUser = { email, password };
  const token = await usersServices.signIn(user);
  res.send({ token });
}