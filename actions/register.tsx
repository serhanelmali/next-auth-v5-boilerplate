"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (validatedFields.success) {
    const { email, name, password } = validatedFields.data;
    const hashedPassword = await bcryptjs.hash(password, 10);

    const isUserExists = await getUserByEmail(email);

    if (isUserExists) {
      return { error: "User already exists." };
    }

    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    // TODO: Send email verification token

    return {
      success: "Verification email sent.",
    };
  } else {
    return {
      error: "Error.",
    };
  }
};
