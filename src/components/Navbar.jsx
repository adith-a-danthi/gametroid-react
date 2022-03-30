import { Link } from 'react-router-dom';
import { useCart } from '../contexts/cart-context';
import { useWishlist } from '../contexts/wishlist-context';

export default function Navbar() {
  const { cartSummary } = useCart();
  const { wishlist } = useWishlist();
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
          <li>
            <Link to="/login">
              <button className="btn link">Login</button>
            </Link>
          </li>
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
                  <span className="badge-content icon-number primary">{cartSummary.quantity}</span>
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
