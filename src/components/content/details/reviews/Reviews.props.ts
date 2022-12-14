import { MovieReviews } from './../../../../interfaces/payloads/MovieReviews';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface ReviewsProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviews: MovieReviews;
}
