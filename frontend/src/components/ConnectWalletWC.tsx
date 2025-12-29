import React, { useState } from 'react';
import { initWalletConnect, pair } from '../services/walletConnectService';

export const ConnectWalletWC: React.FC = () => {
  const [uri, setUri] = useState('');

  const handleConnect = async () => {
    if (!uri) return;
    try {
      await pair(uri);
