import { type NextRequest } from 'next/server';
import { insertContact } from '@/data/insertContact';

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log('RH', data);
  const result = await insertContact(data);
  console.log('RH', result);
  if (result.ok) {
    return Response.json({}, { status: 201 });
  }
  return Response.json({}, { status: 500 });
}
