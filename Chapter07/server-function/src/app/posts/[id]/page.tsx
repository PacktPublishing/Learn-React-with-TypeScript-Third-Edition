import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Loading } from '@/components/Loading';
import { PostDetail } from '@/components/PostDetail';
import { ErrorBoundary } from '@/components/ErrorBoundary';

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
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <PostDetail id={id} />
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}
