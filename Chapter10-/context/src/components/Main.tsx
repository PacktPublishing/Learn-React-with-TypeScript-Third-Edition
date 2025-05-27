'use client';
import { use, type ReactNode } from 'react';
import { UserContext } from '@/state/UserContext';

export function Main({
  children,
}: {
  children: ReactNode;
}) {
  const { userName } = use(UserContext);
  return (
    <main>
      <h1>Welcome</h1>
      <p>
        {userName
          ? `Hello ${userName}!`
          : 'Please sign in'}
      </p>
      {children}
    </main>
  );
}
