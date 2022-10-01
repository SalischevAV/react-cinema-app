import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface TabsProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: JSX.Element[];
}
