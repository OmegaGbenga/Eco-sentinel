import React from 'react';
import { ChainhookMonitor } from '../services/chainhooksService';

export const ChainhooksView: React.FC = () => {
  const monitor = new ChainhookMonitor();

  return (
    <div className="glass-card">
