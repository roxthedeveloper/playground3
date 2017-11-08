import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './containers/appRouter';
import configureStore from './store/configureStore';

require("react-datepicker/dist/react-datepicker-cssmodules.css"); //TODO: seriously? need this so datepicker css won't screw up

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  		<AppRouter />
  </Provider>,
  document.getElementById('root')
);