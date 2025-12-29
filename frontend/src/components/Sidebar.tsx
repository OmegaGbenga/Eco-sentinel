import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar glass-card" style={{ width: '250px', height: '100vh', position: 'fixed', left: 0, top: 0 }}>
      <div className="logo" style={{ padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>EcoSentinel</div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
