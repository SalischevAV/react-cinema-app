import React from 'react';
import { ReviewsProps } from './Reviews.props';

import './Reviews.scss';

const Reviews = (props: ReviewsProps) => {
  return (
    <>
      <div className="movie-reviews" {...props}>
        <div className="div-title">Reviews 20</div>
        <div className="reviews">
          <h3>anonymous</h3>
          <div>This was an awesome movie. I loved every bit of it.</div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
