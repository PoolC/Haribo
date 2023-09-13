import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: !import.meta.env.DEV,
      refetchOnWindowFocus: !import.meta.env.DEV,
      retry: 0,
    },
  },
});
