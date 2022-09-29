import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import { IndicatorsProps, SlideShowProps } from './SlideShow.props';

import './SlideShow.scss';
import { PrevNext } from '../../../interfaces';
import { RootState } from '../../../redux/store';
import { slideShowState } from '../../../redux/reducers/slideShowReducer';
import Spinner from '../../spinner/Spinner';

// TODO remove ts-ignore and add useRef for current index
const SlideShow = ({ auto = true, showArrows = false }: SlideShowProps) => {
  const { slides: images } = useSelector<RootState, slideShowState>((state) => state.slideShow);

  const [{ slideShow, slideIndex }, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  // const currentSlideIndexRef = useRef<number>(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sliderInterval, setSliderInterval] = useState<NodeJS.Timer>();

  let currentSlideIndex = 0;

  const autoMoveSlide = useCallback(() => {
    const lastIndex = currentSlideIndex + 1;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
    setCurrentIndex(currentSlideIndex);
    setState((prev) => ({
      ...prev,
      slideShow: images[currentSlideIndex],
      slideIndex: currentSlideIndex
    }));
  }, [images]);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      slideShow: images[currentSlideIndex],
      slideIndex: currentSlideIndex
    }));
    if (auto) {
      const timeInterval = setInterval(() => autoMoveSlide(), 5000);
      setSliderInterval(timeInterval);
      return () => {
        clearInterval(timeInterval);
      };
    }
  }, [auto, autoMoveSlide, currentSlideIndex, images]);

  if (!images || !slideShow) {
    return <Spinner />;
  }

  const moveSlideWithArrows = (property: PrevNext) => {
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
