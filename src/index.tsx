import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {NovaKraina} from './App';
import * as serviceWorker from './serviceWorker';
// const optionalString = '//localhost:3000';
// console.log( theme, ' theme')


ReactDOM.render(
    <React.StrictMode>
      <NovaKraina />
    </React.StrictMode>,
    document.getElementById('root')
);
// console.log('store', store.getState())
serviceWorker.unregister();
