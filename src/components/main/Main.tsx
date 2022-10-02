import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useScroll from '../../hooks/useScroll';
import { getMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';
import { LoadingState } from '../../redux/reducers/loadingReducer';
import { MovieState } from '../../redux/reducers/movieReducer';
import { RootState } from '../../redux/store';
import MainContent from '../content/main-content/MainContent';
import SearchResults from '../content/search-results/SearchResults';
import Spinner from '../spinner/Spinner';

import './Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const { page, totalPages, requestType, searchResult } = useSelector<RootState, MovieState>(
    (state) => state.movies
  );

  const { loading } = useSelector<RootState, LoadingState>((state) => state.loading);

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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="main" ref={mainRef}>
      {searchResult && searchResult.length === 0 ? <MainContent /> : <SearchResults />}
      <div className="observed" ref={bottomLineRef}></div>
    </div>
  );
};

export default Main;
