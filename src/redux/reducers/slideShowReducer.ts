import { Url } from '../../interfaces';
import { SET_SLIDESHOW, slideShowAction } from '../actionTypes';

export interface slideShowState {
  slides: Url[];
}

const initialState: slideShowState = {
  slides: []
};

export default function slideShowReducer(state = initialState, action: slideShowAction) {
  switch (action.type) {
    case SET_SLIDESHOW:
      return {
        ...initialState,
        slides: action.payload
      };
    default:
      return state;
  }
}
