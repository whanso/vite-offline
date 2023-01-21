import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { eventKeys } from './event';
import './index.css';
import * as api from './api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      networkMode: 'offlineFirst',
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

// we need a default mutation function so that paused mutations can resume after a page reload
queryClient.setMutationDefaults(eventKeys.add(), {
  mutationFn: async (event) => {
    return api.addEvent(event);
  },
  onMutate: async (variables) => {
    // to avoid clashes with our optimistic update when an offline mutation continues
    await queryClient.cancelQueries({ queryKey: eventKeys.list() });
  },
  onSuccess: async () => {
    await queryClient.invalidateQueries({ queryKey: eventKeys.list() });
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        console.log('PersistQueryClientProvider onSuccess');
        queryClient.resumePausedMutations().then(() => {
          queryClient.invalidateQueries();
        });
      }}
    >
      <App />
    </PersistQueryClientProvider>
  </React.StrictMode>
);
