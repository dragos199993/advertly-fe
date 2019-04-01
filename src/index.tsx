import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import { DEFAULT_LANGUAGE } from './constants/i18nConfig';
import en from './i18n/en.json';
import App from './components/presentational/App';

ReactDOM.render(
  (
    <Provider store={ store }>
      <IntlProvider locale={ DEFAULT_LANGUAGE } messages={ en }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  ),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
