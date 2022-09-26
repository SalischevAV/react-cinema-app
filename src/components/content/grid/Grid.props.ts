import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { Url } from '../../../interfaces';
export interface GridProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: Url[];
}
