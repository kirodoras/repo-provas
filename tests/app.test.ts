import app from "../src/app";
import supertest from "supertest";
import client from "../src/database";

console.log(process.env.DATABASE_URL);
beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE users;`;
  await client.$executeRaw`TRUNCATE TABLE tests;`;
});
afterAll(async () => {
  await client.$disconnect();
});

describe("GET /", () => {
  it("should return 200, Online", async () => {
    const result = await supertest(app).get("/");
    const status = result.status;

    expect(status).toEqual(200);
  });
});
