import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToWishlistAPI, getWishlistAPI, removeFromWishlistAPI } from '../utils/wishlist-utils';

const getWishlist = createAsyncThunk('wishlist/getWishlist', async () => {
  const wishlist = await getWishlistAPI();
  return wishlist;
});

const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (product) => {
  const wishlist = await addToWishlistAPI(product);
  return wishlist;
});

const removeFromWishlist = createAsyncThunk('wishlist/removeFromWishlist', async (product) => {
  const wishlist = await removeFromWishlistAPI(product);
  return wishlist;
});

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: {
    [getWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
    },
    [addToWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
    },
    [removeFromWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export default wishlistSlice.reducer;

export { getWishlist, addToWishlist, removeFromWishlist };
