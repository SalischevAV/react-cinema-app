import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageProps } from './ErrorPage.props';

import './ErrorPage.scss';

const ErrorPage = (props: ErrorPageProps) => {
  return (
    <div className="error-page" {...props}>
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      <Link className="error-link" to={'/'}>
        <i className="icon-home"></i> Go back to home page.
      </Link>
    </div>
  );
};

export default ErrorPage;
