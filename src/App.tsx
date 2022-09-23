import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div style={{ background: 'black', color: 'white', textAlign: 'center' }}>
        <h1>QWE</h1>
      </div>
    </Provider>
  );
}

export default App;
