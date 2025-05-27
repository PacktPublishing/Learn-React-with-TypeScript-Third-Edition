import { Content } from './Content';

export function Main({
  userName,
  permissions,
}: {
  userName: string | undefined;
  permissions: undefined | string[];
}) {
  return (
    <main>
      <h1>Welcome</h1>
      <p>
        {userName ? `Hello ${userName}!` : 'Please sign in'}
      </p>
      <Content permissions={permissions} />
    </main>
  );
}
