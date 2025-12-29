import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoConnect, setAutoConnect] = useState(false);

  return (
    <div className="settings-page glass-card" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Settings</h2>
