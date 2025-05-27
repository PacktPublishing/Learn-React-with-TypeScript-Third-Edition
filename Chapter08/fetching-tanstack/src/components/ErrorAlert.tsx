'use client';
export function ErrorAlert({ error }: { error: Error }) {
  return (
    <div role="alert">
      <h3>Something went wrong</h3>
      <p>{error.message}</p>
    </div>
  );
}
