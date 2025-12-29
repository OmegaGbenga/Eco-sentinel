import React, { useState } from 'react';
import { initWalletConnect, pair } from '../services/walletConnectService';

export const ConnectWalletWC: React.FC = () => {
  const [uri, setUri] = useState('');

  const handleConnect = async () => {
    if (!uri) return;
    try {
      await pair(uri);
      alert('Paired!');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="glass-card" style={{ marginTop: '1rem' }}>
      <h3>Wallet Connect (Standard)</h3>
      <input 
        type="text" 
        placeholder="wc: uri" 
