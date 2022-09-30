import React from 'react';
import Rating from '../rating/Rating';
import { v4 as uuidv4 } from 'uuid';

import { useSelector } from 'react-redux';

import { SearchResultsProps } from './SearchResults.props';
import './SearchResults.scss';
import '../grid/Grid.scss';
import { RootState } from '../../../redux/store';
import { MovieState } from '../../../redux/reducers/movieReducer';
import { IMAGE_URL } from '../../../services/movies.service';
import LazyImage from '../../lazy-image/LazyImage';

const SearchResults = (props: SearchResultsProps): JSX.Element => {
  const { searchResult: images, searchQuery } = useSelector<RootState, MovieState>(
    (state) => state.movies
  );
  return (
    <div className="searchKeyword">
      <div className="grid-search-title">
        <span className="grid-text1">You search keyword</span>{' '}
        <span className="grid-text2">{searchQuery}</span>{' '}
      </div>
      <div className="grid" {...props}>
        {images.map((image) => (
          <div key={uuidv4()}>
            {image.poster_path && (
              <LazyImage
                className="grid-cell"
                src={`${IMAGE_URL}${image.poster_path}`}
                alt="placeholder"
              >
                <div className="grid-read-more">
                  <button className="grid-cell-button">Read More</button>
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
