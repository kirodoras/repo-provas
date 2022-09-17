import client from "../database";
import * as testsTypes from "../types/testsTypes";

export async function insert(test: testsTypes.TTest) {
  const result = await client.test.create({
    data: test,
  });
  return result;
}

export async function getByTerms() {
  const tests: object[] = await client.term.findMany({
    select: {
      id: true,
      number: true,
      Disciplines: {
        select: {
          id: true,
          name: true,
          TeacherDiscipline: {
            select: {
              Teacher: true,
              Test: {
                select: {
                  id: true,
                  name: true,
                  pdfUrl: true,
                  Category: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return tests;
}
