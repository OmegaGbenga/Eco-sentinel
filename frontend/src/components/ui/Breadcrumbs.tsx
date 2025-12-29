import React from 'react';
export const Breadcrumbs: React.FC<any> = ({ items }) => <div className='breadcrumbs'>{items.join(' > ')}</div>;
