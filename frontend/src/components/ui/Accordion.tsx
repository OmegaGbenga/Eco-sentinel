import React, { useState } from 'react';
export const Accordion: React.FC<any> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='accordion'>
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
