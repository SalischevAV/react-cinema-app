/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

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

// TODO make HOC for all redux actions and get all values by props

const Header = (props: HeaderProps): JSX.Element => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(true);

  const navigator = useNavigate();
  const location = useLocation();

  const [type, setType] = useState<MovieTypeType>(MovieTypeType.NOW_PLAYING);

  const dispatch = useDispatch();
  const { list } = useSelector<RootState, MovieState>((state) => state.movies);

  const debouncedSearch = useDebounce((value: string) => {
    searchQuery(value)(dispatch);
    searchResult(value)(dispatch);
  }, 500);

  const randomMovies = list?.sort(() => Math.random() - Math.random()).slice(0, 5);

  useEffect(() => {
    getMovies(type)(dispatch);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const slides = randomMovies?.map((movie) => ({
      id: movie.id,
      url: `${IMAGE_URL}${movie.poster_path}`
    }));
    dispatch(getSlides(slides));
  }, [randomMovies, dispatch]);

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
    }
    setType(name);
    setMovieType(newMovieType, name)(dispatch);
  };

  return (
    <>
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
    </>
  );
};

export default Header;
