'use client';
import { useUserStore } from '@/state/useUserStore';

export function Content() {
  const permissions = useUserStore(
    (state) => state.permissions,
  );
  if (permissions === undefined) {
    return null;
  }
  return (
    <p>
      {permissions.includes('admin')
        ? 'Some important stuff that only an admin can do'
        : 'Insufficient permissions'}
    </p>
  );
}
