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
