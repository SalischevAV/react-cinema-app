import React from 'react';
import Rating from '../rating/Rating';

import { GridProps } from './Grid.props';
import './Grid.scss';

const Grid = ({ images }: GridProps) => {
  return (
    <>
      <div className="grid">
        {images.map((image, index) => (
          <div className="" key={index}>
            <div className={'grid-cell'} style={{ backgroundImage: `url(${image.url})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">
                  Incididunt veniam velit nisi consequat laboris
                </span>
                <div className="grid-detail-rating">
                  <Rating rating={image.rating} totalStar={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{image.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
