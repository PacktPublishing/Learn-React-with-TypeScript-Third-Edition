import { notFound } from 'next/navigation';
import { PostDetail } from '@/components/PostDetail';

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) {
    notFound();
  }
  return (
    <main>
      <PostDetail id={id} />
    </main>
  );
}
