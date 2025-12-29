import React from 'react';

interface Transaction {
  id: string;
  hash: string;
  status: 'pending' | 'success' | 'failed';
  amount: string;
}

export const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
