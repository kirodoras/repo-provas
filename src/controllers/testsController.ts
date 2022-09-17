import { Request, Response } from "express";
import * as testsService from "../services/testsService";
import * as testsTypes from "../types/testsTypes";

export async function insert(req: Request, res: Response) {
  const test: testsTypes.TTest = req.body;
  await testsService.insert(test);
  res.sendStatus(201);
}

export async function getByTerms(req: Request, res: Response) {
  const tests = await testsService.getByTerms();
  res.send(tests);
}

export async function getByTeachers(req: Request, res: Response) {
  const tests = await testsService.getByTeachers();
  res.send(tests);
}
