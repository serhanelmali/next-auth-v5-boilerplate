import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Please fill the password field",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password should be minimum 6 characters",
  }),
});
