/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable n/no-callback-literal */
import { useCallback, useRef } from 'react';

export default function useDebounce(callback: Function, delay: number) {
  const timer = useRef<any>();

  const debouncedCallBack = useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallBack;
}
