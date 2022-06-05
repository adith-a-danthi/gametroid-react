import axios from 'axios';

const getCartAPI = async (dispatchCart) => {
  try {
    const response = await axios.get('/api/user/cart', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchCart({ type: 'UPDATE_CART_FROM_API', payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};

const addToCartAPI = async (dispatchCart, product) => {
  try {
    const response = await axios.post(
      '/api/user/cart',
      { product },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchCart({ type: 'UPDATE_CART_FROM_API', payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};

const removeFromCartAPI = async (dispatchCart, product) => {
  try {
    const response = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchCart({ type: 'UPDATE_CART_FROM_API', payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};

const updateQuantityAPI = async (dispatchCart, product, type) => {
  try {
    const params = { action: { type } };
    const response = await axios.post(`/api/user/cart/${product._id}`, params, {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchCart({ type: 'UPDATE_CART_FROM_API', payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};

const clearCartAPI = async (dispatchCart) => {
  try {
    const response = await axios.delete('/api/user/cart', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchCart({ type: 'UPDATE_CART_FROM_API', payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};

export { getCartAPI, addToCartAPI, removeFromCartAPI, updateQuantityAPI, clearCartAPI };
