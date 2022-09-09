import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addToCartAPI,
  clearCartAPI,
  getCartAPI,
  removeFromCartAPI,
  updateCartSummary,
  updateQuantityAPI,
} from '../utils/cart-utils';

const getCart = createAsyncThunk('cart/getCart', async () => {
  const cart = await getCartAPI();
  return cart;
});

const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const cart = await addToCartAPI(product);
  return cart;
});

const removeFromCart = createAsyncThunk('cart/removeFromCart', async (product) => {
  const cart = await removeFromCartAPI(product);
  return cart;
});

const updateQuantity = createAsyncThunk('cart/updateQuantity', async ({ product, type }) => {
  const cart = await updateQuantityAPI(product, type);
  return cart;
});

const clearCart = createAsyncThunk('cart/clearCart', async () => {
  const cart = await clearCartAPI();
  return cart;
});

const initialState = {
  cart: [],
  cartSummary: { initialPrice: 0, discount: 0, qty: 0, total: 0 },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.cartSummary = { ...updateCartSummary(action.payload) };
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.cartSummary = { ...updateCartSummary(action.payload) };
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.cartSummary = { ...updateCartSummary(action.payload) };
    },
    [updateQuantity.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.cartSummary = { ...updateCartSummary(action.payload) };
    },
    [clearCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.cartSummary = { ...updateCartSummary(action.payload) };
    },
  },
});

export default cartSlice.reducer;

export { getCart, addToCart, removeFromCart, updateQuantity, clearCart };
