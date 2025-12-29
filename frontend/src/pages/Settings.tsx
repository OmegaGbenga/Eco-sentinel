import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoConnect, setAutoConnect] = useState(false);

  return (
    <div className="settings-page glass-card" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Settings</h2>
      
      <div className="setting-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
        <label>Enable Notifications</label>
        <input type="checkbox" checked={notifications} onChange={e => setNotifications(e.target.checked)} />
      </div>

      <div className="setting-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
        <label>Dark Mode</label>
        <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} />
      </div>

      <div className="setting-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
        <label>Auto-Connect Wallet</label>
        <input type="checkbox" checked={autoConnect} onChange={e => setAutoConnect(e.target.checked)} />
      </div>
