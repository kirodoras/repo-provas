import joi from "joi";
import * as testsTypes from "../types/testsTypes";

const testsSchema = joi.object<testsTypes.TTest>({
  name: joi.string().required(),
  pdfUrl: joi.string().uri().required(),
  categoryId: joi.number().min(1).required(),
  teacherDisciplineId: joi.number().min(1).required(),
});

export { testsSchema };
