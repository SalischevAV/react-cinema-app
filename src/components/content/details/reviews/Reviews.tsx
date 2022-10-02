/* eslint-disable multiline-ternary */
import React from 'react';
import { ReviewsProps } from './Reviews.props';

import './Reviews.scss';

const Reviews = ({ reviews, ...props }: ReviewsProps) => {
  return (
    <>
      <div className="movie-reviews" {...props}>
        <div className="div-title">Reviews {reviews.total_results}</div>
        {reviews.results.length > 0 ? (
          reviews.results.map((review) => (
            <div className="reviews" key={review.id}>
              <h3>{review.author}</h3>
              <div>{review.content}</div>
            </div>
          ))
        ) : (
          <p>No reviews to show</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
