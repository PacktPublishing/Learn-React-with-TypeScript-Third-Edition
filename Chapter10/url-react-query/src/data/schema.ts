import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});
export type User = z.infer<typeof userSchema>;

export const addressSchema = z.object({
  id: z.string(),
  line1: z.string(),
  line2: z.string().optional(),
  state: z.string(),
  zipcode: z.string(),
});
export type Address = z.infer<
  typeof addressSchema
>;

export const hobbiesSchema = z.object({
  id: z.string(),
  hobbies: z.array(z.string()),
});
export type Hobbies = z.infer<
  typeof hobbiesSchema
>;

export const profileSchema = z.object({
  id: z.string(),
  dateOfBirth: z.string().datetime(),
  gender: z.string(),
  occupation: z.string(),
});
export type Profile = z.infer<
  typeof profileSchema
>;
