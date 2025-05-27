export function Content({
  permissions,
}: {
  permissions: undefined | string[];
}) {
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
