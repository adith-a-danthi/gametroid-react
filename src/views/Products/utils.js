const getSortedProducts = (products, filterState) => {
  const { sortBy } = filterState;
  switch (sortBy) {
    case 'LOW_TO_HIGH':
      return products.sort((a, b) => a.price - b.price);
    case 'HIGH_TO_LOW':
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

const applyCategoryFilter = (products, filterState) => {
  const { categories } = filterState;
  if (categories.length === 0) return products;
  return products.filter((product) => categories.includes(product.categoryName.toLowerCase()));
};

const applyRatingFilter = (products, filterState) => {
  const { rating } = filterState;
  if (rating === 0) return products;
  return products.filter((product) => product.rating >= rating);
};

const applyPriceFilter = (products, filterState) => {
  const { priceRange } = filterState;
  if (priceRange === 50000) return products;
  return products.filter((product) => product.price <= priceRange);
};

const getFilteredProducts = (products, filterState) => {
  return [applyPriceFilter, applyRatingFilter, applyCategoryFilter, getSortedProducts].reduce(
    (acc, fn) => fn(acc, filterState),
    products
  );
};

export { getFilteredProducts };
