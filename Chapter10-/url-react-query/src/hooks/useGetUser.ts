import { userSchema } from '@/data/schema';
import { useQuery } from '@tanstack/react-query';

export function useGetUser(
  userId: string | undefined,
) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await fetch(
        `/api/users/${userId}`,
      );
      return userSchema.parse(
        await response.json(),
      );
    },
    enabled: userId !== undefined,
  });
}
