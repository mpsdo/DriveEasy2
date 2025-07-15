import '@rainbow-me/rainbowkit/styles.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { sepolia } from 'wagmi/chains';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import App from './App';

// Criação da config padrão
const config = getDefaultConfig({
  appName: 'DriveEasy2',
  projectId: 'driveeasy2', // Se quiser usar WalletConnect, esse ID precisa ser real.
  chains: [sepolia],
});

// Query client para React Query (usado pelo RainbowKit/Wagmi)
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
