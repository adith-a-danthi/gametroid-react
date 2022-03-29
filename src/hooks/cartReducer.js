const increaseQuantity = (state, product) => {
  return state.map((item) =>
    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const removeFromCart = (state, product) => {
  return state.filter((item) => item._id !== product._id);
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_CART':
      return state.some((item) => item._id === payload._id)
        ? increaseQuantity(state, payload)
        : [...state, { ...payload, quantity: 1 }];

    case 'INCREASE_QUANTITY':
      return increaseQuantity(state, payload);

    case 'DECREASE_QUANTITY':
      return payload.quantity === 1
        ? removeFromCart(state, payload)
        : state.map((item) =>
            item._id === payload._id ? { ...item, quantity: item.quantity - 1 } : item
          );

    case 'REMOVE_FROM_CART':
      return removeFromCart(state, payload);

    case 'CLEAR_CART':
      return cartInitialState;

    default:
      return state;
  }
};

const cartInitialState = [];

export { cartReducer, cartInitialState };
