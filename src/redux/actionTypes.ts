import { MovieType, MovieTypeType } from './reducers/movieReducer';
import { Url } from './../interfaces/Urls';
import { Results } from './../interfaces/payloads/Result';
export const MOVIE_LIST = 'MOVIE_LIST';
export const LOAD_MORE_MOVIES = 'LOAD_MORE_MOVIES';
export const SET_ERROR = 'SET_ERROR';
export const RESPONSE_PAGE = 'RESPONSE_PAGE';
export const MOVIE_TYPE = 'MOVIE_TYPE';

export const SET_SLIDESHOW = 'SET_SLIDESHOW';

export type ACTION_TYPES =
  | typeof MOVIE_LIST
  | typeof SET_ERROR
  | typeof RESPONSE_PAGE
  | typeof LOAD_MORE_MOVIES
  | typeof MOVIE_TYPE;

export interface MovieAction {
  type: ACTION_TYPES;
  payload: Results & {
    movieType?: MovieType;
    requestType: MovieTypeType;
  };
}

export interface slideShowAction {
  type: typeof SET_SLIDESHOW;
  payload?: Url[];
}
