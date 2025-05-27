import { useGetHobbies } from '@/hooks/useGetHobbies';
import { useAuthStore } from '@/state/useAuthStore';

export function Hobbies() {
  const userId = useAuthStore(
    (state) => state.userId,
  );
  const { data, isPending } =
    useGetHobbies(userId);
  if (isPending) {
    return (
      <div className="tab-content">
        <p>Loading ...</p>
      </div>
    );
  }
  if (!data) {
    return null;
  }
  return (
    <div className="tab-content">
      <p>{data.hobbies.join(', ')}</p>
    </div>
  );
}
