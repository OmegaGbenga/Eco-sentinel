import React from 'react';

export const MapOverview: React.FC = () => {
  return (
    <div className="glass-card" style={{ height: '400px', position: 'relative', overflow: 'hidden', marginTop: '2rem' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
        <h3>Network Topology</h3>
        <p style={{ color: 'var(--text-muted)' }}>Active Nodes: 124</p>
      </div>
      
