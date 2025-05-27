'use server';

import {
  createClient,
  type Client,
} from '@libsql/client';
import { redirect } from 'next/navigation';
import { contactSchema } from './schema';
import { z } from 'zod';

type Err = { message: string };
type FieldErrors = {
  name: Err | null;
  email: Err | null;
  reason: Err | null;
};
type ActionState = {
  ok: boolean;
  error: string;
  formData: FormData;
  errors: FieldErrors;
};

export async function insertContact(
  previousState: ActionState,
  formData: FormData,
) {
  const parsedResult = contactSchema.safeParse(
    Object.fromEntries(formData),
  );
  if (!parsedResult.success) {
    return {
      ok: false,
      error:
        'Unable to save - invalid field values',
      errors: formatZodErrors(parsedResult.error),
      formData,
    };
  }
  const { name, email, reason, notes } =
    parsedResult.data;
  let client: Client | undefined;
  let ok = true;
  let error = '';
  try {
    client = createClient({
      url: process.env.DB_URL ?? '',
    });
    await client.execute({
      sql: 'INSERT INTO contact(name, email, reason, notes) VALUES (?, ?, ?, ?)',
      args: [name, email, reason, notes ?? null],
    });
  } catch {
    ok = false;
    error = 'Problem saving form';
  }
  if (client) {
    client.close();
  }
  if (ok) {
    redirect(
      `/thanks/?name=${encodeURIComponent(name)}`,
    );
  }
  return {
    ok,
    error,
    formData,
    errors: {
      name: null,
      email: null,
      reason: null,
    },
  };
}

function formatZodErrors(error: z.ZodError) {
  const formattedErrors: FieldErrors = {
    name: null,
    email: null,
    reason: null,
  };
  for (const [key, value] of Object.entries(
    error.flatten().fieldErrors,
  )) {
    if (Array.isArray(value)) {
      if (key === 'name') {
        formattedErrors.name = {
          message: value[0],
        };
      } else if (key === 'email') {
        formattedErrors.email = {
          message: value[0],
        };
      } else if (key === 'reason') {
        formattedErrors.reason = {
          message: value[0],
        };
      }
    }
  }
  return formattedErrors;
}
