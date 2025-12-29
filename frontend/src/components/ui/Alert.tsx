import React from 'react';
export const Alert: React.FC<any> = ({ type, message }) => <div className={`alert alert-${type}`}>{message}</div>;
