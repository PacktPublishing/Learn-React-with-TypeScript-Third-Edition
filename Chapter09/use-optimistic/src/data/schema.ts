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

export const getContactsSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    reason: z.string(),
    notes: z.string(),
    //** worth explaining union
    done: z.union([
      z.literal(0),
      z.literal(1),
      z.null(),
    ]),
  }),
);

export const completeSchema = z.object({
  id: z.coerce.number(), //** worth explaining coerce
  notes: z.string().optional(),
});
