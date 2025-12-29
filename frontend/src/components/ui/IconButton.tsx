import React from 'react';
export const IconButton: React.FC<any> = ({ icon, ...props }) => <button className='icon-btn' {...props}>{icon}</button>;
