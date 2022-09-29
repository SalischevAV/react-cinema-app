import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import movieReducer from './movieReducer';
import slideShowReducer from './slideShowReducer';

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
  slideShow: slideShowReducer
});

export default rootReducers;
