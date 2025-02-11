import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    mobile: z.string(),
    password: z.string().min(5, "Password must be at least 5 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
