/* eslint-disable max-len */
import React, { useCallback, useState } from 'react';
import { PrevNext } from '../../../interfaces';
import { MovieState } from '../../../redux/reducers/movieReducer';
import { RootState } from '../../../redux/store';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';
import { MainContentProps } from './MainContent.props';
import { getMovies, setResponsePageNumber } from '../../../redux/actions/movies';
import { useSelector, useDispatch } from 'react-redux';

import './MainContent.scss';

const MainContent = (props: MainContentProps) => {
  const { page, totalPages, movieType, requestType } = useSelector<RootState, MovieState>(
    (state) => state.movies
  );

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(page);

  const paginate = useCallback(
    (type: PrevNext) => {
      let pageNumber = currentPage;
      if (type === 'prev' && currentPage >= 1) {
        pageNumber -= 1;
      } else {
        pageNumber += 1;
      }
      setCurrentPage(pageNumber);
      setResponsePageNumber(pageNumber, totalPages)(dispatch);
      getMovies(requestType, pageNumber);
    },
    [currentPage, dispatch, requestType, totalPages]
  );

  return (
    <div className="main-content" {...props}>
      <SlideShow auto={true} showArrows={false} />
      <div className="grid-movie-title">
        <div className="movieType">{movieType}</div>
        <div className="paginate">
          <Paginate currentPage={page} paginate={paginate} totalPages={totalPages} />
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default MainContent;
