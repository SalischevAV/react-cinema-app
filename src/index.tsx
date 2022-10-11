import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.scss';
import App from './App';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

// if(process.env.NODE_ENV === 'production')
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  beforeBreadcrumb(breadcrumb, hint) {
    return breadcrumb.category === 'ui.click' ? null : breadcrumb;
  },

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
