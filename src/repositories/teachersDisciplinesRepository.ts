import client from "../database";

export async function findById(id: number) {
  const result = await client.teacherDiscipline.findUnique({
    where: { id },
  });
  return result;
}
