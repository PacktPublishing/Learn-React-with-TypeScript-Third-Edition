import { createClient } from '@libsql/client';
import { getContactsSchema } from './schema';

export async function getContacts() {
  const client = createClient({
    url: process.env.DB_URL ?? '',
  });
  const data = await client.execute(
    'SELECT id, name, email, reason, notes, done FROM contact',
  );
  client.close();
  return getContactsSchema.parse(data.rows);
}
