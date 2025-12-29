import React from 'react';
export const Switch: React.FC<any> = ({ on }) => <div className={on ? 'switch-on' : 'switch-off'}></div>;
