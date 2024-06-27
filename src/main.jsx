import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './components/Router/Router.jsx';
import { RouterProvider } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
    <RouterProvider router={router} />
    </StoreContextProvider>
  
  </React.StrictMode>
);
