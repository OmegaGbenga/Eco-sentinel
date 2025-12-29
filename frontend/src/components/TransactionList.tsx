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
           <span>{tx.hash.substr(0, 10)}...</span>
           <span style={{ color: tx.status === 'success' ? '#4caf50' : '#f44336' }}>{tx.status}</span>
           <span>{tx.amount} STX</span>
        </div>
      ))}
    </div>
  );
