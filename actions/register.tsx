"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (validatedFields.success) {
    return {
      success: "Success.",
    };
  } else {
    return {
      error: "Error.",
    };
  }
};
