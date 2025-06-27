import { useCallback } from 'react';

export default function useEnterSubmit(callback) {
  return useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      callback();
    }
  }, [callback]);
}
