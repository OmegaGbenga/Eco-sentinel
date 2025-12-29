import React from 'react';
export const Checkbox: React.FC<any> = ({ label, ...props }) => <label><input type='checkbox' {...props} /> {label}</label>;
