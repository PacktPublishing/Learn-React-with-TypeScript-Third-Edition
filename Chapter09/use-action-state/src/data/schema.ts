import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'You must enter your name',
    })
    .max(50, {
      message:
        'The name must be less than 50 characters',
    }),
  email: z.string().email({
    message:
      'You must enter a valid email address',
  }),
  reason: z.string().min(1, {
    message: 'You must enter a reason',
  }),
  notes: z.string().optional(),
});
