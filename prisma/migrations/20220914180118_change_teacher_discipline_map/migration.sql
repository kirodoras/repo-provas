/*
  Warnings:

  - You are about to drop the `teacher_disciplines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "teacher_disciplines" DROP CONSTRAINT "teacher_disciplines_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "teacher_disciplines" DROP CONSTRAINT "teacher_disciplines_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacherDisciplineId_fkey";

-- DropTable
DROP TABLE "teacher_disciplines";

-- CreateTable
CREATE TABLE "teachers_disciplines" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "teachers_disciplines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teachers_disciplines" ADD CONSTRAINT "teachers_disciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers_disciplines" ADD CONSTRAINT "teachers_disciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachers_disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
