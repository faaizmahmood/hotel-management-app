import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { UserTypeProvider } from './ReduxStore/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <UserTypeProvider>
            <App />
        </UserTypeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
