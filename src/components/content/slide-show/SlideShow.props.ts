import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { Url } from '../../../interfaces';

export interface SlideShowProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: Url[];
  auto?: boolean;
  showArrows?: boolean;
}

export interface IndicatorsProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentSlide: number;
}
