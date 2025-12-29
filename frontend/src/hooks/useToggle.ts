import { useState, useCallback } from 'react';
export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);
