import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themeStyles'
// const optionalString = '//localhost:3000';

console.log( theme, ' theme')

ReactDOM.render(
    <React.StrictMode><BrowserRouter basename={process.env.PUBLIC_URL}>
      <MuiThemeProvider theme={theme}><App /></MuiThemeProvider></BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
