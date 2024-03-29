import axios from 'axios';

const getWishlistAPI = async () => {
  try {
    const response = await axios.get('/api/user/wishlist', {
      headers: { authorization: localStorage.getItem('token') },
    });
    return response.data.wishlist;
  } catch (error) {
    console.log(error);
  }
};

const addToWishlistAPI = async (product) => {
  try {
    const response = await axios.post(
      '/api/user/wishlist',
      { product },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    return response.data.wishlist;
  } catch (error) {
    console.log(error);
  }
};

const removeFromWishlistAPI = async (product) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    return response.data.wishlist;
  } catch (error) {
    console.log(error);
  }
};

export { getWishlistAPI, addToWishlistAPI, removeFromWishlistAPI };
