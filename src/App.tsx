import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Main from './components/main/Main';

import store from './redux/store';

import './App.scss';
import Details from './components/content/details/Details';
import ErrorPage from './components/errorPage/ErrorPage';
import { initialState } from './redux/reducers/movieReducer';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/" element={<Main movies={initialState} />} />
            <Route path="/:id/:name/details" element={<Details movie={[]} loading={false} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
