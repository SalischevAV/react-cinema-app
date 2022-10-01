import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface TabWrapperProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  label: string;
}
