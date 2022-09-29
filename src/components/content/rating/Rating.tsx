import React, { useState, useEffect, useRef, Fragment } from 'react';
import { RatingProps } from './Rating.props';

import './Rating.scss';

const Rating = ({ rating, totalStar }: RatingProps) => {
  const [numberOfStars, setNumberOfStars] = useState<number[]>([]);

  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    setNumberOfStars([...Array(totalStar).keys()].map((i) => i + 1));
    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }
    const starPercentage = `${Math.floor(percentage)}%`;
    if (ratingRef.current) {
      ratingRef.current.style.width = starPercentage;
    }
  }, [rating, totalStar]);

  return (
    <div className="star-rating">
      <div className="back-stars">
        {numberOfStars.map((_, index) => (
          <Fragment key={index}>
            <i className="fa fa-star" aria-hidden="true"></i>
          </Fragment>
        ))}

        <div className="front-stars" ref={ratingRef}>
          {numberOfStars.map((_, index) => (
            <Fragment key={index}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
