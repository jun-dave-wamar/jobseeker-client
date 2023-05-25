import { useQuery } from 'react-query';

export function useGetCustomer() {
  const { isLoading, data, error, refetch } = useQuery(
    'user',
    async () => {
      const response = await fetch('https://pos-appdev-api.vercel.app/api/user');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json()
    },
    {
      refetchOnWindowFocus: false, // Disable refetch on window focus
      staleTime: 60000, // Set a 60 second stale time
    }
  );

  return { isLoading, data, error, refetch };
}
