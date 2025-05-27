import Link from 'next/link';
import {
  getAllPosts,
  getFilteredPosts,
} from '@/data/queries';

export async function PostList({
  criteria,
}: {
  criteria: string | string[] | undefined;
}) {
  const resolvedPosts =
    typeof criteria === 'string'
      ? await getFilteredPosts(criteria)
      : await getAllPosts();

  return (
    <ul>
      {resolvedPosts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
}
