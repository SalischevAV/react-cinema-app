import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { MovieCredits } from '../../../../interfaces/payloads/MovieCredits';
import { MovieDetails } from '../../../../interfaces/payloads/MovieDetail';

export interface OverviewProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  details: MovieDetails;
  credits: MovieCredits;
}
