import React from 'react';
export const Tabs: React.FC<any> = ({ tabs, active, onChange }) => <div className='tabs'>{tabs.map((t:any) => <div key={t} onClick={()=>onChange(t)} className={active===t?'active':''}>{t}</div>)}</div>;
