import React from 'react';
export const ProgressBar: React.FC<any> = ({ value }) => <div className='progress'><div style={{width: `${value}%`}}></div></div>;
