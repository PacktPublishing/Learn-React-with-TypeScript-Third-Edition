'use server';
import { revalidatePath } from 'next/cache';
import {
  createClient,
  type Client,
  type ResultSet,
} from '@libsql/client';

export async function createPost(
  title: string,
  description: string,
) {
  let client: Client | undefined;
  let result: ResultSet | undefined;
  try {
    const client = createClient({
      url: process.env.DB_URL ?? '',
    });
    await client.execute({
      sql: 'INSERT INTO posts(title, description) VALUES (?, ?)',
      args: [title, description],
    });
  } catch {
    return { ok: false };
  } finally {
    if (client) {
      client.close();
    }
  }
  revalidatePath('/posts');
  return {
    ok: true,
    id: result ? result.lastInsertRowid : undefined,
  };
}
