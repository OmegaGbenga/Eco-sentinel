import React from 'react';
import { useNotifications } from '../context/NotificationContext';

export const ToastContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {notifications.map(n => (
        <div 
          key={n.id} 
          onClick={() => removeNotification(n.id)}
          className="glass-card"
          style={{
            padding: '1rem',
            borderLeft: `4px solid ${n.type === 'success' ? '#4caf50' : n.type === 'error' ? '#f44336' : '#2196f3'}`,
            minWidth: '250px',
            cursor: 'pointer',
            animation: 'slideIn 0.3s ease'
          }}
        >
          {n.message}
