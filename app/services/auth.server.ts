import { TLoginUser, TRegisterUser } from "~/utils/types/user.server";
import { prisma } from "./prisma.server";
import { compare, hash } from "bcryptjs";
import { createUserSession } from "./cookie.server";

export async function doesUserExist(email: string) {
  const user = await prisma.user.findFirst({ where: { email } });
  return !!user;
}

export async function createUser(newUser: TRegisterUser) {
  const passwordHash = await hash(newUser.password, 10);
  const user = await prisma.user.create({
    data: {
      email: newUser.email,
      username: newUser.username,
      password: passwordHash,
    },
  });
  return { id: user.id, username: user.username, email: user.email };
}

export async function loginUser({ email, password }: TLoginUser) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("Invalid email or password");
  const isValidPassword = await compare(password, user.password);
  if (!isValidPassword) throw new Error("Invalid email or password");
  return createUserSession(user.id, "/admin/dashboard");
}
