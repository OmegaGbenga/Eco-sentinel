import React from 'react';
import { DataChart } from '../components/DataChart';
import { generateMockData } from '../data/mockData';
import { ToastContainer } from '../components/ToastContainer';

export const AdminPage: React.FC = () => {
  return (
    <div className="admin-container" style={{ padding: '2rem' }}>
      <div className="glass-card" style={{ marginBottom: '2rem' }}>
        <h2>System Administration</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
           <button>Clear Cache</button>
