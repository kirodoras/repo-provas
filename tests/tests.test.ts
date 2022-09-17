import app from "../src/app";
import supertest from "supertest";
import * as testsFactory from "./factories/testsFactory";
import * as usersFactory from "./factories/usersFactory";

//ATENCION - RUN THE SCRIPT "npm run test:seed" BEFORE RUNNING THE TESTS
describe(`POST /tests/submit`, () => {
  it("should return 201", async () => {
    const test = testsFactory.fakerTest();
    const token = await usersFactory.createUserReturnToken();
    console.log({ token });
    const result = await supertest(app)
      .post("/tests/submit")
      .send(test)
      .set("authorization", `Bearer ${token}`);
    const status = result.status;
    expect(status).toEqual(201);
  });
  it("should return 401, invalid token", async () => {
    const test = testsFactory.fakerTest();
    const result = await supertest(app)
      .post("/tests/submit")
      .send(test)
      .set("authorization", `Bearer XXXXXXX`);
    const status = result.status;
    expect(status).toEqual(401);
  });
  it("should return 422", async () => {
    const test = testsFactory.fakerWrongTest();
    const token = await usersFactory.createUserReturnToken();
    const result = await supertest(app)
      .post("/tests/submit")
      .send(test)
      .set("authorization", `Bearer ${token}`);
    const status = result.status;
    expect(status).toEqual(422);
  });
});
