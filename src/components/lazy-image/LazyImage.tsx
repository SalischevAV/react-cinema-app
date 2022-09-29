import React, { useState, useEffect } from 'react';
import { LazyImageProps } from './LazyImage.props';

import loader from '../../assets/images/loader.gif';

const LazyImage = ({ src, alt, children, className, ...props }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(loader);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%'
          }
        );
        observer.observe(imageRef);
      }
    }

    return () => {
      didCancel = true;
      if (observer?.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <div
      className={className}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref={setImageRef}
      style={{ backgroundImage: `url(${imageSrc})` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default LazyImage;
