import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useScroll from '../../hooks/useScroll';
import { getMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';
import { MovieState } from '../../redux/reducers/movieReducer';
import { RootState } from '../../redux/store';
import MainContent from '../content/main-content/MainContent';

import './Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const { page, totalPages, requestType } = useSelector<RootState, MovieState>(
    (state) => state.movies
  );

  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);

  const fetchData = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setResponsePageNumber(currentPage, totalPages)(dispatch);
    }
    getMoreMovies(requestType, currentPage + 1)(dispatch);
  };

  useScroll(mainRef, bottomLineRef, fetchData);

  return (
    <div className="main" ref={mainRef}>
      <MainContent />
      <div className="observed" ref={bottomLineRef}></div>
    </div>
  );
};

export default Main;
