import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { IndicatorsProps, SlideShowProps } from './SlideShow.props';

import './SlideShow.scss';

const SlideShow = ({ images, auto = true, showArrows = false }: SlideShowProps) => {
  // TODO create interface
  const [{ slideShow, slideIndex }, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderInterval, setSliderInterval] = useState<NodeJS.Timer>();

  let currentSlideIndex = 0;

  useEffect(() => {
    if (auto) {
      const timeInterval = setInterval(() => constAutoMoveSlide(), 3000);
      setSliderInterval(timeInterval);
      return () => {
        clearInterval(timeInterval);
        clearInterval(timeInterval);
      };
    }
  }, [images]);

  const constAutoMoveSlide = () => {
    const lastIndex = currentSlideIndex + 1;
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
    setCurrentIndex(currentSlideIndex);
    setState((prev) => ({
      ...prev,
      slideShow: images[currentSlideIndex],
      slideIndex: currentSlideIndex
    }));
  };

  const moveSlideWithArrows = (property: 'prev' | 'next') => {
    let index = currentIndex;
    if (property === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
    } else {
      if (currentIndex < images.length) {
        index += 1;
      }
      if (index === images.length) {
        index = 0;
      }
    }
    setCurrentIndex(index);
    setState((prev) => ({
      ...prev,
      slideShow: images[index],
      slideIndex: index
    }));
  };

  const RenderArrows = (): JSX.Element => {
    return (
      <div className="slider-arrows">
        <div
          className="slider-arrow slider-arrow--left"
          onClick={() => moveSlideWithArrows('prev')}
        />
        <div
          className="slider-arrow slider-arrow--right"
          onClick={() => moveSlideWithArrows('next')}
        />
      </div>
    );
  };

  const Indicators = ({ currentSlide }: IndicatorsProps) => {
    const listIndicators = images.map((_, index) => (
      <button
        className={cn('slider-navButton', {
          'slider-navButton--active': index === currentSlide
        })}
        key={index}
      />
    ));
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images?.length && slideShow && (
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${slideShow.url})`
              }}
            ></div>
          )}
        </div>
        <Indicators currentSlide={slideIndex} />
        {showArrows && <RenderArrows />}
      </div>
    </>
  );
};

export default SlideShow;
