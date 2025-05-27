import { profileSchema } from '@/data/schema';
import { useQuery } from '@tanstack/react-query';

export function useGetProfile(
  userId: string | undefined,
) {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const response = await fetch(
        `/api/users/${userId}/profile`,
      );
      return profileSchema.parse(
        await response.json(),
      );
    },
    enabled: userId !== undefined,
  });
}
