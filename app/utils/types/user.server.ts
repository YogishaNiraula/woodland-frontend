import { z } from "zod";
import { refine } from "@conform-to/zod";
import { doesUserExist } from "~/services/auth.server";

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerUserSchema = z.object({
  email: z
    .string()
    .email()
    .pipe(
      z.string().superRefine((email, ctx) =>
        refine(ctx, {
          validate: () => doesUserExist(email),
          message: "Email is already taken",
        })
      )
    ),
  username: z.string(),
  password: z.string(),
});

export type TLoginUser = z.infer<typeof loginUserSchema>;
export type TRegisterUser = z.infer<typeof registerUserSchema>;
