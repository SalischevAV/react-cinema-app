import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface LazyImageProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  src: string;
  alt: string;
  className: string;
}
