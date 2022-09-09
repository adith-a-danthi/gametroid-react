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
import { Provider } from 'react-redux';
import { store } from './store';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ProductProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ProductProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
