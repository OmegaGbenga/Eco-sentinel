import React from 'react';
export const Badge: React.FC<any> = ({ text, color }) => <span className='badge' style={{ backgroundColor: color }}>{text}</span>;
