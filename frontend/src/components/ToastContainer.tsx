import React from 'react';
import { useNotifications } from '../context/NotificationContext';

export const ToastContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

