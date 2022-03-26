import { createContext, useContext, useReducer } from 'react';
import { cartReducer, cartInitialState } from '../hooks/cartReducer';
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, cartInitialState);

  const cartSummary = cart.reduce(
    (summary, product) => ({
      ...summary,
      initialPrice: summary.initialPrice + product.price * product.quantity,
      discount: summary.discount + (product.price * product.discount * product.quantity) / 100,
      quantity: summary.quantity + product.quantity,
    }),
    { initialPrice: 0, discount: 0, quantity: 0, total: 0 }
  );
  cartSummary.total = cartSummary.initialPrice - cartSummary.discount;

  return (
    <CartContext.Provider value={{ cart, dispatchCart, cartSummary }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
