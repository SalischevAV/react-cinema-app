import { MovieReviews } from './../../interfaces/payloads/MovieReviews';
import { MovieImages } from './../../interfaces/payloads/MovieImages';
import { MovieVideos } from './../../interfaces/payloads/MovieVideos';
import { MovieCredits } from './../../interfaces/payloads/MovieCredits';
import { Result } from '../../interfaces/payloads/Result';
import {
  MovieAction,
  MOVIE_LIST,
  LOAD_MORE_MOVIES,
  RESPONSE_PAGE,
  MOVIE_TYPE,
  SEARCH_QUERY,
  SEARCH_RESULT,
  MOVIE_DETAILS,
  CLEAR_MOVIE_DETAILS
} from './../actionTypes';
import { MovieDetails } from '../../interfaces/payloads/MovieDetail';

export enum MovieType {
  NOW_PLAYING = 'Now Playing',
  POPULAR = 'Popular',
  TOP_RATED = 'Top Rated',
  UPCOMING = 'Upcoming'
}

export enum MovieTypeType {
  NOW_PLAYING = 'now_playing',
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  UPCOMING = 'upcoming',
  LATEST = 'latest'
}

export type MovieDetailsPayload =
  | MovieCredits
  | MovieVideos
  | MovieImages
  | MovieDetails
  | MovieReviews;

export interface MovieState {
  list: Result[];
  page: number;
  totalPages: number;
  totalResults: number;
  movieType: MovieType;
  requestType: MovieTypeType;
  searchQuery?: string;
  searchResult: Result[];
  movie: MovieDetailsPayload[];
}

export const initialState: MovieState = {
  list: [],
  page: 1,
  totalPages: 0,
  totalResults: 0,
  movieType: MovieType.NOW_PLAYING,
  requestType: MovieTypeType.NOW_PLAYING,
  searchResult: [],
  movie: []
};

export default (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        list: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        list: [...state.list, ...action.payload.results],
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults
      };
    case RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    case MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload.movieType,
        requestType: action.payload.requestType
      };
    case SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.searchResult
      };
    case MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload.movie
      };
    case CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movie: []
      };
    default:
      return state;
  }
};
