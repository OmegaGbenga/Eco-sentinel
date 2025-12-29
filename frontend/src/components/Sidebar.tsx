import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar glass-card" style={{ width: '250px', height: '100vh', position: 'fixed', left: 0, top: 0 }}>
      <div className="logo" style={{ padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>EcoSentinel</div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Dashboard', 'Sensors', 'Analytics', 'Settings', 'Profile'].map(item => (
            <li key={item} style={{ padding: '1rem 2rem', cursor: 'pointer', transition: 'background 0.2s' }}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
