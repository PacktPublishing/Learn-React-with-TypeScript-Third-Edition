import { type NextRequest } from 'next/server';
import {
  getAllPosts,
  getFilteredPosts,
} from '@/data/queries';

export async function GET(request: NextRequest) {
  const criteria =
    request.nextUrl.searchParams.get('criteria');
  if (typeof criteria === 'string') {
    return Response.json(await getFilteredPosts(criteria));
  }
  return Response.json(await getAllPosts());
}
