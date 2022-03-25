import axios from 'axios';
import { createContext, useContext, useState, useReducer, useEffect } from 'react';

const ProductContext = createContext();

import { filterInitialState, filterReducer } from '../hooks/filterReducer';

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filtersState, filtersDispatch] = useReducer(filterReducer, filterInitialState);

  useEffect(async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, filtersState, filtersDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
