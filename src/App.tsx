import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';

import store from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Header />
      <div style={{ color: 'white', textAlign: 'center' }}>
        <h1>QWE</h1>
      </div>
    </Provider>
  );
}

export default App;
