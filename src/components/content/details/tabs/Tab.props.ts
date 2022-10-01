/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

// TODO delete any
export interface TabProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  activeTab: any;
  label: string;
  click: Function;
}
