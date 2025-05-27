import {
  createClient,
  type Client,
} from '@libsql/client';
import { Contact } from './schema';

export async function insertContact({
  name,
  email,
  reason,
  notes,
}: Contact) {
  let client: Client | undefined;
  let ok = true;
  try {
    client = createClient({
      url: process.env.DB_URL ?? '',
    });
    await client.execute({
      sql: 'INSERT INTO contact(name, email, reason, notes) VALUES (?, ?, ?, ?)',
      args: [name, email, reason, notes],
    });
  } catch (err) {
    console.log('Err', err);
    ok = false;
  }
  if (client) {
    client.close();
  }
  return {
    ok,
  };
}
