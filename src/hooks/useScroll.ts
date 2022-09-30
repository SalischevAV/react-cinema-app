/* eslint-disable @typescript-eslint/ban-types */
import { RefObject, useEffect, useRef } from 'react';

export default function useScroll(
  parentRef: RefObject<HTMLElement>,
  childRef: RefObject<HTMLElement>,
  callback: Function
) {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0.2
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        callback();
      }
    }, options);

    if (childRef.current) {
      observer.current.observe(childRef.current);
    }
    const childRefPointer = childRef.current;

    return function () {
      if (childRefPointer) {
        observer.current?.unobserve(childRefPointer);
      }
    };
  }, [callback, childRef, parentRef]);
}
