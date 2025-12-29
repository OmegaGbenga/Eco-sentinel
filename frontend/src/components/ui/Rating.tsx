import React from 'react';
export const Rating: React.FC<any> = ({ stars }) => <div>{'★'.repeat(stars)}{'☆'.repeat(5-stars)}</div>;
