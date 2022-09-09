import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from '../contexts/auth-context';

import { getCart } from '../features/cartSlice';
import { getWishlist } from '../features/wishlistSlice';

export default function Navbar() {
  const {
    authState: { isAuthenticated },
    logout,
  } = useAuth();

  const { cartSummary } = useSelector((store) => store.cartState);
  const { wishlist } = useSelector((store) => store.wishlistState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCart());
      dispatch(getWishlist());
    }
  }, []);

  return (
    <header>
      <nav className="navbar">
        <h3 className="nav-title">
          <Link to="/">
            <span className="fas fa-gamepad text-primary mr-2"></span>
            Gametroid
          </Link>
        </h3>
        <ul className="nav-link-section">
          {/* Cart & Wishlist Links */}
          {isAuthenticated && (
            <>
              <li>
                <Link to="/wishlist">
                  <button className="btn link">
                    Wishlist
                    <span className="badge ml-1">
                      <span className="far fa-heart fa-lg"></span>
                      <span className="badge-content icon-number primary">{wishlist.length}</span>
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <button className="btn link">
                    Cart
                    <span className="badge">
                      <span className="fas fa-shopping-cart"></span>
                      <span className="badge-content icon-number primary">{cartSummary.qty}</span>
                    </span>
                  </button>
                </Link>
              </li>
            </>
          )}

          {/* Account Actions */}
          <li>
            <Link
              to="/login"
              onClick={() => {
                isAuthenticated && logout();
              }}>
              <button className="btn link">{isAuthenticated ? 'Logout' : 'Login'}</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
