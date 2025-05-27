import { useGetAddress } from '@/hooks/useGetAddress';
import { useAuthStore } from '@/state/useAuthStore';

export function Address() {
  const userId = useAuthStore(
    (state) => state.userId,
  );
  const { data: address, isPending } =
    useGetAddress(userId);
  if (isPending) {
    return (
      <div className="tab-content">
        <p>Loading ...</p>
      </div>
    );
  }
  if (!address) {
    return null;
  }
  return (
    <div className="tab-content">
      <p>{address.line1}</p>
      <p>{address.line2}</p>
      <p>{address.state}</p>
      <p>{address.zipcode}</p>
    </div>
  );
}
