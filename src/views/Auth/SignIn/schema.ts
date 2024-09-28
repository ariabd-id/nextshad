import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' })
    .regex(/^[A-Z]/, {
      message: 'Password must start with a capital letter.',
    }) // Enforces first capital letter
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message:
        'Password must contain at least one special character (!, @, #, etc.).',
    }), // Enforces the inclusion of at least one special character
})

export { loginSchema }
