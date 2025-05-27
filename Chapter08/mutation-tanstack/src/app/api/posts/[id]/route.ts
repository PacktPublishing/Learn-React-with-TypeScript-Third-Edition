import { getPost } from '@/data/queries';

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) {
    return Response.json(
      { message: 'Post not found' },
      { status: 404 },
    );
  }
  const data = await getPost(id);
  if (!data) {
    return Response.json(
      { message: 'Post not found' },
      { status: 404 },
    );
  }
  return Response.json(data);
}
