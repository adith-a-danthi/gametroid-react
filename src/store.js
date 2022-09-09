import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/filterSlice';
import productsReducer from './features/productsSlice';

export const store = configureStore({
  reducer: {
    filterState: filterReducer,
    productsState: productsReducer,
  },
});
