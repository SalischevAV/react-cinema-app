import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
