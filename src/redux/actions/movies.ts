/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  MOVIE_IMAGES_URL,
  MOVIE_REVIEWS_URL,
  MOVIE_API_URL,
  MOVIE_CREDITS_URL,
  MOVIE_DETAILS_URL,
  MOVIE_VIDEOS_URL,
  SEARCH_API_URL
} from './../../services/movies.service';
import {
  MOVIE_LIST,
  SET_ERROR,
  LOAD_MORE_MOVIES,
  RESPONSE_PAGE,
  MOVIE_TYPE,
  SEARCH_QUERY,
  SEARCH_RESULT,
  MOVIE_DETAILS,
  CLEAR_MOVIE_DETAILS,
  ErrorAction
} from '../actionTypes';
import { Dispatch } from 'redux';
import { MovieTypeType, MovieType } from '../reducers/movieReducer';
import { AxiosError } from 'axios';
import { LOADING, LOADING_FINISHED } from '../reducers/loadingReducer';

export const getMovies =
  (type: MovieTypeType, pageNumber = 1) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOADING });
      const payload = await getMoviesRequest(type, pageNumber);
      const movieAction = {
        type: MOVIE_LIST,
        payload
      };
      dispatch(movieAction);
    } catch (error) {
      const errorAction: ErrorAction = {
        type: SET_ERROR,
        payload: {
          errorMessage: (error as AxiosError).message,
          statusCode: (error as AxiosError).response?.status ?? (error as AxiosError).status
        }
      };
      dispatch(errorAction);
    } finally {
      dispatch({ type: LOADING_FINISHED });
    }
  };

export const searchResult = (searchQuery: string) => async (dispatch: Dispatch) => {
  try {
    if (searchQuery) {
      dispatch({ type: LOADING });
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
    const errorAction: ErrorAction = {
      type: SET_ERROR,
      payload: {
        errorMessage: (error as AxiosError).message,
        statusCode: (error as AxiosError).response?.status ?? (error as AxiosError).status
      }
    };
    dispatch(errorAction);
  } finally {
    dispatch({ type: LOADING_FINISHED });
  }
};

export const getMoreMovies =
  (type: MovieTypeType, pageNumber: number) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOADING });
      const payload = await getMoviesRequest(type, pageNumber);
      const movieAction = {
        type: LOAD_MORE_MOVIES,
        payload
      };
      dispatch(movieAction);
    } catch (error) {
      const errorAction: ErrorAction = {
        type: SET_ERROR,
        payload: {
          errorMessage: (error as AxiosError).message,
          statusCode: (error as AxiosError).response?.status ?? (error as AxiosError).status
        }
      };
      dispatch(errorAction);
    } finally {
      dispatch({ type: LOADING_FINISHED });
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

export const getMovieDetails = (id: string | number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOADING });
    const details = await MOVIE_DETAILS_URL(id);
    const credits = await MOVIE_CREDITS_URL(id);
    const images = await MOVIE_IMAGES_URL(id);
    const videos = await MOVIE_VIDEOS_URL(id);
    const reviews = await MOVIE_REVIEWS_URL(id);

    const resp = await Promise.all([details, credits, images, videos, reviews])
      .then(async (values) => await Promise.all(values.map((value) => value.data)))
      .then((response) => response);
    const movieAction = {
      type: MOVIE_DETAILS,
      payload: {
        movie: resp
      }
    };
    dispatch(movieAction);
  } catch (error) {
    const errorAction: ErrorAction = {
      type: SET_ERROR,
      payload: {
        errorMessage: (error as AxiosError).message,
        statusCode: (error as AxiosError).response?.status ?? (error as AxiosError).status
      }
    };
    dispatch(errorAction);
  } finally {
    dispatch({ type: LOADING_FINISHED });
  }
};

export const clearMovieDetails = () => (dispatch: Dispatch) => {
  const movieAction = {
    type: CLEAR_MOVIE_DETAILS
  };
  dispatch(movieAction);
};
