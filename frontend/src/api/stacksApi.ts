import { StacksMainnet } from '@stacks/network';

const network = new StacksMainnet();

export const getAccountBalances = async (address: string) => {
