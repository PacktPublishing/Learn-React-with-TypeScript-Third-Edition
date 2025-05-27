import { useGetProfile } from '@/hooks/useGetProfile';
import { useAuthStore } from '@/state/useAuthStore';

export function Profile() {
  const userId = useAuthStore(
    (state) => state.userId,
  );
  const { data: profile, isPending } =
    useGetProfile(userId);
  if (isPending) {
    return (
      <div className="tab-content">
        <p>Loading ...</p>
      </div>
    );
  }
  if (!profile) {
    return null;
  }
  return (
    <div className="tab-content">
      {profile.dateOfBirth && (
        <p>
          {new Date(
            profile.dateOfBirth,
          ).toLocaleDateString()}
        </p>
      )}
      <p>{profile.gender}</p>
      <p>{profile.occupation}</p>
    </div>
  );
}
