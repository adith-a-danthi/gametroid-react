import { createContext, useContext, useReducer } from 'react';
import { wishlistInitialState, wishlistReducer } from '../hooks/wishlistReducer';
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, wishlistInitialState);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
