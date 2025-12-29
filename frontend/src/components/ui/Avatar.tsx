import React from 'react';
export const Avatar: React.FC<any> = ({ src, fallback }) => <div className='avatar'><img src={src} alt='avatar' onError={(e:any) => e.target.src=fallback} /></div>;
