import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import movieReducer from './movieReducer';
import slideShowReducer from './slideShowReducer';
import loadingReducer from './loadingReducer';

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
  slideShow: slideShowReducer,
  loading: loadingReducer
});

export default rootReducers;
