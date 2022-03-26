import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_reset.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/product-context';
import { CartProvider } from './contexts/cart-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
