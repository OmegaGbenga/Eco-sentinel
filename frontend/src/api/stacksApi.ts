import { StacksMainnet } from '@stacks/network';

const network = new StacksMainnet();

export const getAccountBalances = async (address: string) => {
  const response = await fetch(`${network.coreApiUrl}/extended/v1/address/${address}/balances`);
  return response.json();
};

export const getTransactions = async (address: string) => {
  const response = await fetch(`${network.coreApiUrl}/extended/v1/address/${address}/transactions`);
  return response.json();
};

