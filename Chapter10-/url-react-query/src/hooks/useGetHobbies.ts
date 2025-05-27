import { hobbiesSchema } from '@/data/schema';
import { useQuery } from '@tanstack/react-query';

export function useGetHobbies(
  userId: string | undefined,
) {
  return useQuery({
    queryKey: ['hobbies', userId],
    queryFn: async () => {
      const response = await fetch(
        `/api/users/${userId}/hobbies`,
      );
      return hobbiesSchema.parse(
        await response.json(),
      );
    },
    enabled: userId !== undefined,
  });
}
