import { Url } from '../../interfaces';
import { SET_SLIDESHOW, slideShowAction } from '../actionTypes';

export const getSlides = (slides: Url[] = []): slideShowAction => {
  return {
    type: SET_SLIDESHOW,
    payload: slides
  };
};
