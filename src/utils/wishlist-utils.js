import axios from 'axios';

const getWishlistAPI = async (dispatchWishlist) => {
  try {
    const response = await axios.get('/api/user/wishlist', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchWishlist({ type: 'UPDATE_WISHLIST_FROM_API', payload: response.data.wishlist });
  } catch (error) {
    console.log(error);
  }
};

const addToWishlistAPI = async (dispatchWishlist, product) => {
  try {
    const response = await axios.post(
      '/api/user/wishlist',
      { product },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchWishlist({ type: 'UPDATE_WISHLIST_FROM_API', payload: response.data.wishlist });
  } catch (error) {
    console.log(error);
  }
};

const removeFromWishlistAPI = async (dispatchWishlist, product) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchWishlist({ type: 'UPDATE_WISHLIST_FROM_API', payload: response.data.wishlist });
  } catch (error) {
    console.log(error);
  }
};

export { getWishlistAPI, addToWishlistAPI, removeFromWishlistAPI };
