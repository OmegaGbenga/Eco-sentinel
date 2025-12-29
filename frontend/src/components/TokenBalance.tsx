import React from 'react';

export const TokenBalance: React.FC<{ symbol: string, balance: string, icon: string }> = ({ symbol, balance, icon }) => {
  return (
    <div className="token-card glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
