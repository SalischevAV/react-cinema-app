import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { MovieState } from '../../redux/reducers/movieReducer';
export interface MainProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  movies: MovieState;
}
