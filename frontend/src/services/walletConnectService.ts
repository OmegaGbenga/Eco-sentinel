import { Core } from '@walletconnect/core';
import { Web3Wallet } from '@walletconnect/web3wallet';

const core = new Core({
  projectId: 'YOUR_PROJECT_ID_HERE'
});

export const initWalletConnect = async () => {
  const web3wallet = await Web3Wallet.init({
    core,
    metadata: {
      name: 'Ecosentinel',
      description: 'Ecosentinel Wallet Connect',
      url: 'https://ecosentinel.app',
      icons: []
    }
  });
  console.log('Wallet Connect Initialized');
  return web3wallet;
};

export const pair = async (uri: string) => {
  const wallet = await initWalletConnect();
  await wallet.core.pairing.pair({ uri });
};
