import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { PrevNext } from '../../../interfaces';
export interface PaginateProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  paginate: (type: PrevNext) => void;
}
