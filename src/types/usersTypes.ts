import { User } from "@prisma/client";

type TUser = Omit<User, "id">;

type IUserSingUp = TUser & { confirmPassword: string };

export { User, TUser, IUserSingUp };
