import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Colors, GlobalStyles } from '@assets/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Colors />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);
