import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface SlideShowProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  auto?: boolean;
  showArrows?: boolean;
}

export interface IndicatorsProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentSlide: number;
}
