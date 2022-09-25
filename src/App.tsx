import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Main from './components/main/Main';

import store from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
