import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Auth0Provider } from '@auth0/auth0-react';


import { store } from './toolkit/store';
import {Provider} from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <Auth0Provider
    domain="dev-s1lln40lmbm6it54.us.auth0.com"
    clientId="sTAYqbkDYRAyyFjaB578YKqIBEBBoKZX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>  {/**this is called wrapping */}
    <App />
  </Provider>
  </Auth0Provider>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

