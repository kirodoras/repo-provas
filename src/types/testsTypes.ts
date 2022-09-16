import { Test } from "@prisma/client";

type TTest = Omit<Test, "id">;

export { Test, TTest };
