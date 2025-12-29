import { useEffect } from 'react';
export const useClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;
