import '@rainbow-me/rainbowkit/styles.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  configureChains,
  createConfig,
  WagmiConfig,
} from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import App from './App';

const { chains, publicClient } = configureChains(
  [sepolia], // você pode trocar por outra rede depois
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'DriveEasy2',
  projectId: 'driveeasy2', // nome fictício, não precisa ser real
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
