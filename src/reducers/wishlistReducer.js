const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_WISHLIST_FROM_API':
      return [...payload];
    case 'ADD_TO_WISHLIST':
      return state.some((item) => item._id === payload._id) ? state : [...state, payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter((item) => item._id !== payload._id);
    case 'CLEAR_WISHLIST':
      return wishlistInitialState;
    default:
      return state;
  }
};

const wishlistInitialState = [];

export { wishlistReducer, wishlistInitialState };
