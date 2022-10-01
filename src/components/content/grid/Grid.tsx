import React from 'react';
import Rating from '../rating/Rating';
import { v4 as uuidv4 } from 'uuid';

import { useSelector } from 'react-redux';

import { GridProps } from './Grid.props';
import './Grid.scss';
import { RootState } from '../../../redux/store';
import { MovieState } from '../../../redux/reducers/movieReducer';
import { IMAGE_URL } from '../../../services/movies.service';
import LazyImage from '../../lazy-image/LazyImage';
import { Link } from 'react-router-dom';

const Grid = (props: GridProps): JSX.Element => {
  const { list: images } = useSelector<RootState, MovieState>((state) => state.movies);

  const formatMovieTitle = (title: string): string => {
    return title.toLowerCase().replace(/ /g, '_');
  };
  return (
    <>
      <div className="grid" {...props}>
        {images.map((image) => (
          <div key={uuidv4()}>
            <LazyImage
              className="grid-cell"
              src={`${IMAGE_URL}${image.poster_path}`}
              alt="placeholder"
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <Link to={`/${image.id}/${formatMovieTitle(image.title)}/details`}>
                    Read More
                  </Link>
                </button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{image.title}</span>
                <div className="grid-detail-rating">
                  {image.vote_average && <Rating rating={image.vote_average} totalStar={10} />}
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{image.vote_average}</div>
                </div>
              </div>
            </LazyImage>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
