import React from 'react';

interface DataPoint {
  timestamp: number;
  value: number;
}

export const DataChart: React.FC<{ data: DataPoint[], title: string }> = ({ data, title }) => {
  const maxVal = Math.max(...data.map(d => d.value));
  
  return (
    <div className="glass-card" style={{ marginTop: '20px', padding: '20px' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', gap: '4px', paddingTop: '20px' }}>
        {data.map((point, i) => (
          <div 
            key={i} 
            style={{
              flex: 1,
              background: `linear-gradient(to top, hsl(var(--primary) / 0.8), hsl(var(--secondary) / 0.8))`,
              height: `${(point.value / maxVal) * 100}%`,
              borderRadius: '4px 4px 0 0',
              transition: 'height 0.3s ease',
              minWidth: '8px'
            }}
            title={`Value: ${point.value}`}
