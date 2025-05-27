'use server';
import {
  createClient,
  type Client,
} from '@libsql/client';
import { completeSchema } from './schema';
import { revalidatePath } from 'next/cache';

type ActionState = {
  ok: boolean;
  error: string;
  formData: FormData;
};
export async function completeContact(
  previousState: ActionState,
  formData: FormData,
) {
  // emphasize the duration of the server call
  await new Promise((resolve) =>
    setTimeout(resolve, 1000),
  );
  const parsedResult = completeSchema.safeParse(
    Object.fromEntries(formData),
  );
  if (!parsedResult.success) {
    return {
      ok: false,
      error:
        'Unable to save - invalid field values',
      formData,
    };
  }
  const { id, notes } = parsedResult.data;
  let client: Client | undefined;
  let ok = true;
  let error = '';
  try {
    client = createClient({
      url: process.env.DB_URL ?? '',
    });
    await client.execute({
      sql: 'UPDATE contact SET notes = ?, done = 1 WHERE id = ?',
      args: [notes ?? null, id],
    });
  } catch {
    ok = false;
    error = 'Problem saving form';
  }
  if (client) {
    client.close();
  }
  revalidatePath('/');
  return {
    ok,
    error,
    errors: {
      name: null,
      email: null,
      reason: null,
    },
    formData,
  };
}
