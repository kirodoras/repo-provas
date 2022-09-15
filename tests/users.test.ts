import app from "../src/app";
import supertest from "supertest";
import client from "../src/database";
import * as usersFactory from "./factories/users.factory";

beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE users;`;
});

describe("POST /users/signup", () => {
  it("should return 201", async () => {
    const user = usersFactory.fakerUserSignUp();
    const result = await supertest(app).post("/users/signup").send(user);
    const status = result.status;
    expect(status).toEqual(201);
  });
  it("should return 409", async () => {
    const user = await usersFactory.createUserSignUp();
    const result = await supertest(app).post("/users/signup").send(user);
    const status = result.status;
    expect(status).toEqual(409);
  });
  it("should return 422, wrong password", async () => {
    const user = usersFactory.fakerUserSignUpWrongPassword();
    const result = await supertest(app).post("/users/signup").send(user);
    const status = result.status;
    expect(status).toEqual(422);
  });
});

describe("POST /users/signin", () => {
  it("should return 200", async () => {
    const user = await usersFactory.createUserSignIn();
    const result = await supertest(app).post("/users/signin").send(user);
    const status = result.status;
    expect(status).toEqual(200);
  });
  it("should return 401, user not found", async () => {
    const user = usersFactory.fakerUserSignIn();
    const result = await supertest(app).post("/users/signin").send(user);
    const status = result.status;
    expect(status).toEqual(401);
  });
  it("should return 401, wrong password", async () => {
    const user = await usersFactory.createUserSignInWrongPassword();
    const result = await supertest(app).post("/users/signin").send(user);
    const status = result.status;
    expect(status).toEqual(401);
  });
});

afterAll(async () => {
  await client.$disconnect();
});
