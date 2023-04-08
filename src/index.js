import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components"
import store from '@/store'
import App from './App';
import theme from './assets/theme'
import './assets/css/index.less'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <ThemeProvider theme={theme}>
          <App />
          </ThemeProvider>
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

;
