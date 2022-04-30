import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_reset.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/product-context';
import { CartProvider } from './contexts/cart-context';
import { WishlistProvider } from './contexts/wishlist-context';
import { AuthProvider } from './contexts/auth-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
