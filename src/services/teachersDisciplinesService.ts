import * as teachersDisciplinesRepository from "../repositories/teachersDisciplinesRepository";

export async function checkExistsTeacherDiscipline(
  teacherDisciplineId: number
) {
  const result = await teachersDisciplinesRepository.findById(
    teacherDisciplineId
  );
  if (!result) {
    throw { type: "not_found", message: "TeacherDiscipline not found" };
  }
}
