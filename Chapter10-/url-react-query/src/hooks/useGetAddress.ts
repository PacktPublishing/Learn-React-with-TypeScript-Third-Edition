import { addressSchema } from '@/data/schema';
import { useQuery } from '@tanstack/react-query';

export function useGetAddress(
  userId: string | undefined,
) {
  return useQuery({
    queryKey: ['address', userId],
    queryFn: async () => {
      const response = await fetch(
        `/api/users/${userId}/address`,
      );
      return addressSchema.parse(
        await response.json(),
      );
    },
    enabled: userId !== undefined,
  });
}
