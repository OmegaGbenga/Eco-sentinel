import React from 'react';

export const MapOverview: React.FC = () => {
  return (
    <div className="glass-card" style={{ height: '400px', position: 'relative', overflow: 'hidden', marginTop: '2rem' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
        <h3>Network Topology</h3>
        <p style={{ color: 'var(--text-muted)' }}>Active Nodes: 124</p>
      </div>
      
      {/* Abstract Map Visualization Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(10, 1fr)', 
        height: '100%', 
        opacity: 0.3 
      }}>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} style={{
            border: '1px solid rgba(255,255,255,0.05)',
            position: 'relative'
          }}>
            {Math.random() > 0.9 && (
              <div style={{
                width: '8px', height: '8px',
                background: '#00ff88',
                borderRadius: '50%',
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
