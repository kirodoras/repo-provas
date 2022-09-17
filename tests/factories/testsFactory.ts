//import client from "../../src/database";
import { faker } from "@faker-js/faker";

export function fakerTest() {
  const test = {
    name: faker.lorem.words(2),
    pdfUrl: faker.internet.url(),
    categoryId: faker.datatype.number({ min: 1, max: 3 }),
    teacherDisciplineId: faker.datatype.number({ min: 1, max: 6 }),
  };
  return test;
}

export function fakerWrongTest() {
  const test = {
    name: faker.lorem.words(2),
    pdfUrl: faker.internet.url(),
  };
  return test;
}

export function fakerMissingTest() {
  const test = {
    name: faker.lorem.words(2),
    pdfUrl: faker.internet.url(),
    categoryId: 999999,
    teacherDisciplineId: 999999,
  };
  return test;
}
