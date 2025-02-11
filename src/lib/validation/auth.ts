import { z } from "zod"

export const loginSchema = z.object({
  role: z.enum(["student", "staff"]),
  id: z.string()
    .min(1, "ID is required")
    .regex(/^[0-9]+$/, "ID must contain only numbers"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
})

export type LoginInput = z.infer<typeof loginSchema>