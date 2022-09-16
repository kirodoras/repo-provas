import client from "../database";
import * as testsTypes from "../types/testsTypes";

export async function insert(test: testsTypes.TTest) {
  const result = await client.test.create({
    data: test,
  });
  return result;
}
