import { Cogreact } from 'cogreact';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const region = process.env.REACT_APP_REGION;
const identityPoolId = process.env.REACT_APP_IDENTITY_POOL_ID;
const userPoolId = process.env.REACT_APP_USER_POOL_ID;
const userPoolWebClientId = process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID;

if (!region || !identityPoolId || !userPoolId || !userPoolWebClientId) {
  throw new Error('Please set environment variables.');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Cogreact
          AuthConfig={{
            region,
            identityPoolId,
            userPoolId,
            userPoolWebClientId,
          }}
          loadingComponent={<p>ローディング中です</p>}
        >
          <App />
        </Cogreact>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
