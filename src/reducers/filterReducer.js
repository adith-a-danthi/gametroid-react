const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOW_TO_HIGH':
      return { ...state, sortBy: payload };
    case 'HIGH_TO_LOW':
      return { ...state, sortBy: payload };
    case 'PRICE_RANGE':
      return { ...state, priceRange: payload };
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, payload] };
    case 'REMOVE_CATEGORY':
      return { ...state, categories: state.categories.filter((category) => category !== payload) };
    case 'RATING':
      return { ...state, rating: payload };
    case 'CLEAR_FILTERS':
      return filterInitialState;
    default:
      return state;
  }
};

const filterInitialState = {
  categories: [],
  priceRange: 50000,
  sortBy: null,
  rating: 0,
};

export { filterReducer, filterInitialState };
