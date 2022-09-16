import app from "../src/app";
import supertest from "supertest";

console.log(process.env.DATABASE_URL);

beforeEach(async () => {
  // essa função será executada antes de cada it() rodar
  //await client.$executeRaw`TRUNCATE TABLE [TABLE-NAME];`;
});

describe("GET /", () => {
  it("should return 200, Online", async () => {
    const result = await supertest(app).get("/");
    const status = result.status;

    expect(status).toEqual(200);
  });
});

afterAll(async () => {
  // essa função será executada ao final de todos os testes
  //await client.$disconnect();
});
