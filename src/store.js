import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/filterSlice';
import productsReducer from './features/productsSlice';
import cartReducer from './features/cartSlice';
import wishlistReducer from './features/wishlistSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    filterState: filterReducer,
    productsState: productsReducer,
    cartState: cartReducer,
    wishlistState: wishlistReducer,
    authState: authReducer,
  },
});
