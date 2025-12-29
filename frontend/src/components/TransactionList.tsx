import React from 'react';

interface Transaction {
  id: string;
  hash: string;
  status: 'pending' | 'success' | 'failed';
  amount: string;
}

export const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div className="transaction-list glass-card">
      <h3>Recent Activity</h3>
      {transactions.map(tx => (
        <div key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
