import * as testsRepository from "../repositories/testsRepository";
import * as categoriesService from "./categoriesService";
import * as teachersDisciplinesService from "./teachersDisciplinesService";
import * as testsTypes from "../types/testsTypes";

export async function insert(test: testsTypes.TTest) {
  const { categoryId, teacherDisciplineId } = test;
  await categoriesService.checkExistsCategory(categoryId);
  await teachersDisciplinesService.checkExistsTeacherDiscipline(
    teacherDisciplineId
  );
  await testsRepository.insert(test);
}

export async function getByTerms() {
  return await testsRepository.getByTerms();
}
