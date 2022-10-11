import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import movieReducer from './movieReducer';
import slideShowReducer from './slideShowReducer';
import loadingReducer from './loadingReducer';
import routReducer from './routReducer';

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
  slideShow: slideShowReducer,
  loading: loadingReducer,
  routes: routReducer
});

export default rootReducers;
