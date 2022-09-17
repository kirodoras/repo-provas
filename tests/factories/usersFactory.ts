import client from "../../src/database";
import { faker } from "@faker-js/faker";
import * as brycptProvider from "../../src/providers/bcryptProvider";
import * as jwtProvider from "../../src/providers/jwtProvider";

export function fakerUserSignUp() {
  const password = faker.internet.password(8);
  const user = {
    email: faker.internet.email(),
    password: password,
    confirmPassword: password,
  };
  return user;
}

export function fakerUserSignUpWrongPassword() {
  const password = faker.internet.password(7);
  const user = {
    email: faker.internet.email(),
    password: password,
    confirmPassword: password,
  };
  return user;
}

export function fakerUserSignIn() {
  const password = faker.internet.password(8);
  const user = {
    email: faker.internet.email(),
    password: password,
  };
  return user;
}

export async function createUserSignUp() {
  try {
    const user = fakerUserSignUp();
    await client.user.create({
      data: {
        email: user.email,
        password: user.password,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}

export async function createUserSignIn() {
  try {
    const user = fakerUserSignUp();
    await client.user.create({
      data: {
        email: user.email,
        password: await brycptProvider.encode(user.password),
      },
    });
    return {
      email: user.email,
      password: user.password,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function createUserSignInWrongPassword() {
  try {
    const user = fakerUserSignUp();
    await client.user.create({
      data: {
        email: user.email,
        password: await brycptProvider.encode(user.password),
      },
    });
    return {
      email: user.email,
      password: faker.internet.password(8),
    };
  } catch (err) {
    console.log(err);
  }
}

export async function createUserReturnToken() {
  try {
    const user = fakerUserSignUp();
    await client.user.create({
      data: {
        email: user.email,
        password: await brycptProvider.encode(user.password),
      },
    });
    const email = user.email;
    const token = jwtProvider.encode({ email });
    return token;
  } catch (err) {
    console.log(err);
  }
}
