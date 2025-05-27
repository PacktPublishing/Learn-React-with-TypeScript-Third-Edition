import { useAuthStore } from '@/state/useAuthStore';
import { Tab } from './Tab';
import { TabDetail } from './TabDetail';

export function Content() {
  const permissions = useAuthStore(
    (state) => state.permissions,
  );
  if (permissions === undefined) {
    return null;
  }
  if (!permissions.includes('admin')) {
    return <p>Insufficient permissions</p>;
  }
  return (
    <>
      <div className="tabs">
        <Tab name="address" label="Address" />
        <Tab name="profile" label="Profile" />
        <Tab name="hobbies" label="Hobbies" />
      </div>
      <TabDetail />
    </>
  );
}
