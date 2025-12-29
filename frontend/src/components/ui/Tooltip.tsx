import React from 'react';
export const Tooltip: React.FC<any> = ({ text, children }) => <div className='tooltip-container'>{children}<span className='tooltip-text'>{text}</span></div>;
