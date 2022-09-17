import client from "../src/database";

async function main() {
  const termsIds = await createTerms();
  console.log({ termsIds });

  const categoriesIds = await createCategories();
  console.log({ categoriesIds });

  const teachersIds = await createTearchers();
  console.log({ teachersIds });

  const disciplinesIds = await createDisciplines(termsIds);
  console.log({ disciplinesIds });

  await createTeachersDisciplines(teachersIds, disciplinesIds);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    client.$disconnect();
  });

async function createTeachersDisciplines(
  teachersIds: number[],
  disciplinesIds: number[]
) {
  let pos = 0;
  await client.$executeRaw`TRUNCATE TABLE teachers_disciplines CASCADE;`;
  for (let i = 0; i < disciplinesIds.length; i++) {
    await client.teacherDiscipline.create({
      data: {
        id: i + 1,
        teacherId: teachersIds[pos],
        disciplineId: disciplinesIds[i],
      },
    });
    if (i === 2) pos = 1;
  }
}

async function createDisciplines(termsIds: number[]): Promise<number[]> {
  const arr = [];
  const disciplines = [
    "HTML e CSS",
    "JavaScript",
    "React",
    "Humildade",
    "Planejamento",
    "Autoconfiança",
  ];
  let pos = 0;
  for (const discipline of disciplines) {
    const { id } = await client.discipline.upsert({
      where: { name: discipline },
      update: {},
      create: { name: discipline, termId: termsIds[pos] },
      select: { id: true },
    });
    arr.push(id);
    pos++;
    if (pos === 4) pos = 0;
  }
  return arr;
}

async function createTearchers(): Promise<number[]> {
  const arr = [];
  const teachers = ["Diego Pinho", "Bruna Hamori"];
  for (const teacher of teachers) {
    const { id } = await client.teacher.upsert({
      where: { name: teacher },
      update: {},
      create: { name: teacher },
      select: { id: true },
    });
    arr.push(id);
  }
  return arr;
}

async function createCategories(): Promise<number[]> {
  const arr = [];
  const categories = ["Projeto", "Prática", "Recuperação"];
  for (const category of categories) {
    const { id } = await client.category.upsert({
      where: { name: category },
      update: {},
      create: { name: category },
      select: { id: true },
    });
    arr.push(id);
  }
  return arr;
}

async function createTerms(): Promise<number[]> {
  const arr = [];
  for (let i = 1; i <= 6; i++) {
    const { id } = await client.term.upsert({
      where: { number: i },
      update: {},
      create: { number: i },
      select: { id: true },
    });
    arr.push(id);
  }
  return arr;
}
