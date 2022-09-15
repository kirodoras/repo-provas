import client from "../database";
import * as usersTypes from "../types/users.types";

export async function insert(user: usersTypes.TUser) {
  const result = await client.user.create({
    data: user,
  });
  return result;
}

export async function select(email: string) {
  const result = await client.user.findUnique({
    where: { email },
  });
  return result;
}