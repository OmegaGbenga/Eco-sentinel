import React from 'react';

export const TokenBalance: React.FC<{ symbol: string, balance: string, icon: string }> = ({ symbol, balance, icon }) => {
  return (
    <div className="token-card glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <img src={icon} alt={symbol} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      <div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{symbol} Balance</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{balance}</div>
      </div>
    </div>
  );
};

