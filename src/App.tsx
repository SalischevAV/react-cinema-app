import React, { DetailedHTMLProps, HtmlHTMLAttributes, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';

import './App.scss';
import Details from './components/content/details/Details';
import { initialState } from './redux/reducers/movieReducer';
import ErrorBoundary from './components/errorPage/ErrorBoundary';
import { CustomRout } from './redux/reducers/routReducer';
import { useDispatch } from 'react-redux';
import { appRoutes } from './redux/actions/routes';

function App(
  props: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element {
  const routesArray: CustomRout[] = useMemo(
    () => [
      {
        id: 1,
        path: '/',
        component: <Main movies={initialState} />
      },
      {
        id: 2,
        path: '/:id/:name/details',
        component: <Details movie={[]} loading={false} />
      }
    ],
    []
  );

  const dispatch = useDispatch();

  const routesState = useMemo(() => {
    return routesArray.map((route) => {
      return {
        id: route.id,
        path: route.path
      };
    });
  }, [routesArray]);

  useEffect(() => {
    appRoutes(routesState)(dispatch);
  }, [dispatch, routesState]);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <div className="app">
          <Routes>
            {routesArray.map((rout) => (
              <Route key={rout.id} path={rout.path} element={rout.component} {...props} />
            ))}
          </Routes>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
