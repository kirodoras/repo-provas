import * as categoriesRepository from "../repositories/categoriesRepository";

export async function checkExistsCategory(categoryId: number) {
  const result = await categoriesRepository.findById(categoryId);
  if (!result) {
    throw { type: "not_found", message: "Category not found" };
  }
}
