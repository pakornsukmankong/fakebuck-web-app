import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
import AuthContextProvider from './contexts/AuthContext';
import LoadingContextProvider from './contexts/LoadingContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoadingContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </LoadingContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
