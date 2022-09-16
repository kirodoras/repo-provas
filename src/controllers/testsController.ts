import { Request, Response } from "express";
import * as testsService from "../services/testsService";
import * as testsTypes from "../types/testsTypes";

export async function insert(req: Request, res: Response) {
  const test: testsTypes.TTest = req.body;
  await testsService.insert(test);
  res.sendStatus(201);
}
