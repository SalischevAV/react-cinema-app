/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';

import { HeaderProps } from './Header.props';

import './Header.scss';
import Logo from '../../assets/svg/Movie.svg';
import HEADER_LIST from './headerList';
import {
  getMovies,
  setMovieType,
  searchQuery,
  searchResult,
  clearMovieDetails
} from '../../redux/actions/movies';
import { RootState } from '../../redux/store';
import { MovieState, MovieType, MovieTypeType } from '../../redux/reducers/movieReducer';
import { IMAGE_URL } from '../../services/movies.service';
import { getSlides } from '../../redux/actions/slide';
import useDebounce from '../../hooks/useDebounce';
import { routesState } from '../../redux/reducers/routReducer';
import { setError } from '../../redux/actions/error';
import { ErrorState } from '../../redux/reducers/errorReducer';

const Header = (props: HeaderProps): JSX.Element => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  const navigator = useNavigate();
  const location = useLocation();
  const detailsRoute = useMatch('/:id/:name/details');

  const [type, setType] = useState<MovieTypeType>(MovieTypeType.NOW_PLAYING);

  const dispatch = useDispatch();
  const { list } = useSelector<RootState, MovieState>((state) => state.movies);
  const { url, path, routesArray } = useSelector<RootState, routesState>((state) => state.routes);
  const { errorMessage, statusCode } = useSelector<RootState, ErrorState>((state) => state.errors);

  const debouncedSearch = useDebounce((value: string) => {
    searchQuery(value)(dispatch);
    searchResult(value)(dispatch);
  }, 500);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (errorMessage || statusCode) {
      const error = new Error(`${errorMessage ?? ''}. Status code : ${statusCode ?? ''}`);
      throw error;
    }
  }, [errorMessage, statusCode]);

  useEffect(() => {
    if (routesArray.length) {
      if (!path && !url) {
        const error = new Error(
          `The page with path '${location.pathname}' not found. Status code : 404`
        );
        setError({
          errorMessage: `The page with path '${location.pathname}' not found`,
          statusCode: 404
        })(dispatch);
        throw error;
      }
    }
  }, [routesArray, path, url]);

  useEffect(() => {
    getMovies(type)(dispatch);
  }, [type]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const randomMovies = list?.sort(() => Math.random() - Math.random()).slice(0, 5);
    const slides = randomMovies?.map((movie) => ({
      id: movie.id,
      url: `${IMAGE_URL}${movie.poster_path}`
    }));
    dispatch(getSlides(slides));
  }, [list, dispatch]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (detailsRoute || location.pathname === '/') {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [detailsRoute, location.pathname]);

  function navigateToMainPage() {
    navigator('/');
    clearMovieDetails()(dispatch);
  }

  function onSearchChange(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
    debouncedSearch(target.value);
  }

  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);
    if (!navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  const setMovieTypeUrl = (name: MovieTypeType, newMovieType: MovieType) => {
    if (location.pathname !== '/') {
      navigator('/');
      clearMovieDetails()(dispatch);
    }
    setType(name);
    setMovieType(newMovieType, name)(dispatch);
    getMovies(name)(dispatch);
  };

  return (
    <>
      {showHeader && (
        <div className="header-nav-wrapper">
          <div className="header-bar">
            <div className="header-navbar">
              <div className="header-image" onClick={navigateToMainPage}>
                <img src={Logo} alt="" className="logo" />
              </div>
              <div
                id="header-mobile-menu"
                onClick={toggleMenu}
                className={cn('header-menu-toggle', {
                  'is-active': menuClass
                })}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className={cn('header-nav', { 'header-mobile-nav': navClass })}>
                {HEADER_LIST.map((data) => (
                  <li
                    key={data.id}
                    className={cn('header-nav-item', {
                      'active-item': data.type === type
                    })}
                    onClick={() => setMovieTypeUrl(data.type, data.name)}
                  >
                    <span className="header-list-name">
                      <i className={data.iconClass}></i>
                    </span>
                    &nbsp;
                    <span className="header-list-name">{data.name}</span>
                  </li>
                ))}
                {showSearch && (
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a movie"
                    onChange={onSearchChange}
                    value={search}
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
