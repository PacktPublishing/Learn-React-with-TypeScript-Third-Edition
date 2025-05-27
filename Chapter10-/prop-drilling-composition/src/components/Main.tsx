import type { ReactNode } from 'react';

export function Main({
  userName,
  children,
}: {
  userName: string | undefined;
  children: ReactNode;
}) {
  return (
    <main>
      <h1>Welcome</h1>
      <p>
        {userName ? `Hello ${userName}!` : 'Please sign in'}
      </p>
      {children}
    </main>
  );
}
