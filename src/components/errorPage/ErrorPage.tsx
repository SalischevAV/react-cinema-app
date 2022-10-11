import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError } from '../../redux/actions/error';
import { pathUrl } from '../../redux/actions/routes';
import { ErrorState } from '../../redux/reducers/errorReducer';
import { RootState } from '../../redux/store';
import { ErrorPageProps } from './ErrorPage.props';

import './ErrorPage.scss';

const ErrorPage = ({ clearState, ...props }: ErrorPageProps) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { errorMessage } = useSelector<RootState, ErrorState>((state) => state.errors);

  const navigateToHomePage = () => {
    navigator('/');
    pathUrl('/', '/')(dispatch);
    setError({ errorMessage: '' })(dispatch);
    if (clearState) {
      clearState();
    }
  };
  return (
    <div className="error-page" {...props}>
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">{errorMessage ? `${errorMessage}` : 'Something went wrong'}</p>
      <div className="error-link" onClick={navigateToHomePage}>
        <i className="icon-home"></i> Go back to home page
      </div>
      9
    </div>
  );
};

export default ErrorPage;
