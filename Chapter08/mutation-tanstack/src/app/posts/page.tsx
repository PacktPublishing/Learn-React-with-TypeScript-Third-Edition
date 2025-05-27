import { PostList } from '@/components/PostList';
import { NewPost } from '@/components/NewPost';

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const criteria = (await searchParams).criteria;
  const resolvedHeading =
    typeof criteria === 'string'
      ? `Posts for ${criteria}`
      : 'Posts';

  return (
    <main>
      <h2>{resolvedHeading}</h2>
      <NewPost />
      <PostList criteria={criteria} />
    </main>
  );
}
