import * as usersTypes from "../types/users.types";
import * as usersRepository from "../repositories/users.repository";
import * as bcryptProvider from "../providers/bcrypt.provider";
import * as jwtProvider from "../providers/jwt.provider";

export async function signUp(user: usersTypes.TUser) {
  const { email, password } = user;
  await checkUserExists(email);
  const hash = await bcryptProvider.encode(password);
  await usersRepository.insert({ email, password: hash });
  console.log(user);
}

export async function checkUserExists(email: string) {
  const user = await usersRepository.select(email);
  if (user) {
    throw { type: "conflict", message: "User already exists" };
  }
}

export async function signIn(user: usersTypes.TUser) {
  const { email, password } = user;
  const userMatch = await checkUserNotExists(email);
  const match = bcryptProvider.verify(password, userMatch.password);
  if (!match) {
    throw { type: "unauthorized", message: "Invalid request" };
  }
  const token = jwtProvider.encode({ email });
  return token;
}

export async function checkUserNotExists(email: string) {
  const user = await usersRepository.select(email);
  if (!user) {
    throw { type: "unauthorized", message: "Invalid request" };
  }
  return user;
}