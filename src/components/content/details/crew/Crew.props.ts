import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { MovieCredits } from '../../../../interfaces/payloads/MovieCredits';

export interface CrewProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  credits: MovieCredits;
}
