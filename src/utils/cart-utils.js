import axios from 'axios';

const getCartAPI = async () => {
  try {
    const response = await axios.get('/api/user/cart', {
      headers: { authorization: localStorage.getItem('token') },
    });
    return response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

const addToCartAPI = async (product) => {
  try {
    const response = await axios.post(
      '/api/user/cart',
      { product },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    return response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

const removeFromCartAPI = async (product) => {
  try {
    const response = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    return response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

const updateQuantityAPI = async (product, type) => {
  try {
    const params = { action: { type } };
    const response = await axios.post(`/api/user/cart/${product._id}`, params, {
      headers: { authorization: localStorage.getItem('token') },
    });
    return response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

const clearCartAPI = async () => {
  try {
    const response = await axios.delete('/api/user/cart', {
      headers: { authorization: localStorage.getItem('token') },
    });
    return response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

const updateCartSummary = (cart) => {
  const cartSummary = cart.reduce(
    (summary, product) => ({
      ...summary,
      initialPrice: summary.initialPrice + product.price * product.qty,
      discount: summary.discount + (product.price * product.discount * product.qty) / 100,
      qty: summary.qty + product.qty,
    }),
    { initialPrice: 0, discount: 0, qty: 0, total: 0 }
  );
  cartSummary.total = cartSummary.initialPrice - cartSummary.discount;
  return cartSummary;
};

export {
  getCartAPI,
  addToCartAPI,
  removeFromCartAPI,
  updateQuantityAPI,
  clearCartAPI,
  updateCartSummary,
};
