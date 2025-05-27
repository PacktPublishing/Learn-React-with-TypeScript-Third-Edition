'use client';
import { useGetUser } from '@/hooks/useGetUser';
import { Content } from './Content';
import { useAuthStore } from '@/state/useAuthStore';

export function Main() {
  const userId = useAuthStore(
    (state) => state.userId,
  );
  const { data: user } = useGetUser(userId);
  const userName = user?.name;
  return (
    <main>
      <h1>Welcome</h1>
      <p>
        {userName
          ? `Hello ${userName}!`
          : 'Please sign in'}
      </p>
      <Content />
    </main>
  );
}
