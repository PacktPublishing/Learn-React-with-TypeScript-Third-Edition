import { getHobbies } from '@/data/user';

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const data = await getHobbies(id);
  if (!data) {
    return Response.json(
      { message: 'Post not found' },
      { status: 404 },
    );
  }
  return Response.json(data);
}
