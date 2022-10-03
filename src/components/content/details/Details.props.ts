import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { MovieDetailsPayload } from '../../../redux/reducers/movieReducer';

export interface DetailsProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  movie: MovieDetailsPayload[];
  loading: boolean;
}
