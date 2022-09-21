import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  priceRange: 50000,
  sortBy: null,
  rating: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    lowToHigh: (state) => {
      state.sortBy = 'LOW_TO_HIGH';
    },
    highToLow: (state) => {
      state.sortBy = 'HIGH_TO_LOW';
    },
    updatePriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    addCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
    updateRating: (state, action) => {
      state.rating = action.payload;
    },
    clearFilters: () => {
      return initialState;
    },
  },
});

export const {
  lowToHigh,
  highToLow,
  updatePriceRange,
  addCategory,
  removeCategory,
  updateRating,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
