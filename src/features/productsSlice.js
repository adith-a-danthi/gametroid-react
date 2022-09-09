import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getProducts = createAsyncThunk('products/getProducts', async () => {
  try {
    const {
      data: { products },
      status,
    } = await axios.get('/api/products');
    if (status === 200) {
      return products;
    }
  } catch (error) {
    console.error(error);
  }
});

const getCategories = createAsyncThunk('products/getCategories', async () => {
  try {
    const {
      data: { categories },
      status,
    } = await axios.get('/api/categories');
    if (status === 200) {
      return categories;
    }
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  categories: [],
  products: [],
};

const productsSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default productsSlice.reducer;

export { getProducts, getCategories };
