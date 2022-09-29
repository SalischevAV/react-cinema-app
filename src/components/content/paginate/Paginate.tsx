import React from 'react';
import cn from 'classnames';

import './Paginate.scss';
import { PaginateProps } from './Pginate.props';

const Paginate = ({ currentPage, totalPages, paginate }: PaginateProps) => {
  return (
    <>
      <span className="pageCount">
        {currentPage} - {totalPages}
      </span>
      <button
        className={cn('paginate-button', { 'paginate-disable': currentPage === 1 })}
        onClick={() => paginate('prev')}
      >
        Prev
      </button>
      <button
        className={cn('paginate-button', {
          'paginate-disable': currentPage === totalPages
        })}
        onClick={() => paginate('next')}
      >
        Next
      </button>
    </>
  );
};

export default Paginate;
