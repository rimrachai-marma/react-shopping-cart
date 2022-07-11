import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CartProvider from './context/CartProvider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
