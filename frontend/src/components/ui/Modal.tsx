import React from 'react';
export const Modal: React.FC<any> = ({ isOpen, children }) => isOpen ? <div className='modal-overlay'><div className='modal'>{children}</div></div> : null;
