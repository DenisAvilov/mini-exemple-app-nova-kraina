import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themeStyles'
import store from './redux/redux';
import { Provider } from 'react-redux';
// const optionalString = '//localhost:3000';
// console.log( theme, ' theme')

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <MuiThemeProvider theme={theme} >
            <AppContainer />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
