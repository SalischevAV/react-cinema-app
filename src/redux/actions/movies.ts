/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/naming-convention */
import { MovieError } from '../../interfaces/payloads';
import { MOVIE_API_URL, SEARCH_API_URL } from './../../services/movies.service';
import {
  MOVIE_LIST,
  SET_ERROR,
  LOAD_MORE_MOVIES,
  RESPONSE_PAGE,
  MOVIE_TYPE,
  SEARCH_QUERY,
  SEARCH_RESULT
} from '../actionTypes';
import { Dispatch } from 'redux';
import { MovieTypeType } from '../reducers/movieReducer';
import { MovieType } from './../reducers/movieReducer';
import { AxiosError } from 'axios';

export const getMovies =
  (type: MovieTypeType, pageNumber = 1) =>
  async (dispatch: Dispatch) => {
    try {
      const payload = await getMoviesRequest(type, pageNumber);
      const movieAction = {
        type: MOVIE_LIST,
        payload
      };
      dispatch(movieAction);
    } catch (error) {
      const errorAction = {
        type: SET_ERROR,
        payload: {
          errorMessage: (error as AxiosError).message,
          status: (error as AxiosError).request.status
        }
      };
      dispatch(errorAction);
    }
  };

export const searchResult = (searchQuery: string) => async (dispatch: Dispatch) => {
  try {
    if (searchQuery) {
      const {
        data: { results: movies }
      } = await SEARCH_API_URL(searchQuery);
      const movieAction = {
        type: SEARCH_RESULT,
        payload: {
          searchResult: movies
        }
      };
      dispatch(movieAction);
    } else {
      const movieAction = {
        type: SEARCH_RESULT,
        payload: {
          searchResult: []
        }
      };
      dispatch(movieAction);
    }
  } catch (error) {
    const errorAction = {
      type: SET_ERROR,
      payload: {
        errorMessage: (error as AxiosError).message,
        status: (error as AxiosError).request.status
      }
    };
    dispatch(errorAction);
  }
};

export const getMoreMovies =
  (type: MovieTypeType, pageNumber = 1) =>
  async (dispatch: Dispatch) => {
    try {
      const payload = await getMoviesRequest(type, pageNumber);
      const movieAction = {
        type: LOAD_MORE_MOVIES,
        payload
      };
      dispatch(movieAction);
    } catch (error) {
      const errorAction = {
        type: SET_ERROR,
        payload: (error as MovieError).status_message
      };
      dispatch(errorAction);
    }
  };

export const setResponsePageNumber =
  (page: number, totalPages: number) => async (dispatch: Dispatch) => {
    if (page <= totalPages) {
      const payload = { page, totalPages };
      dispatch({
        type: RESPONSE_PAGE,
        payload
      });
    }
  };

export const setMovieType =
  (name: MovieType, type: MovieTypeType) => async (dispatch: Dispatch) => {
    const payload = { movieType: name, requestType: type };
    dispatch({
      type: MOVIE_TYPE,
      payload
    });
  };

export const searchQuery = (query: string) => async (dispatch: Dispatch) => {
  const payload = { searchQuery: query };
  dispatch({
    type: SEARCH_QUERY,
    payload
  });
};

const getMoviesRequest = async (type: MovieTypeType, pageNumber: number) => {
  const {
    data: { results, page, total_pages: totalPages, total_results: totalResults }
  } = await MOVIE_API_URL(type, pageNumber);
  const payload = { results, page, totalPages, totalResults };
  return payload;
};
