import Link from 'next/link';
import { posts } from '@/data/posts';

export default function Posts() {
  return (
    <main>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
