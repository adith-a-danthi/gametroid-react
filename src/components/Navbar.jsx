import { Link } from 'react-router-dom';

export default function Navbar() {
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
            <Link to="/">
              <button className="btn link">Login</button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className="btn link">
                Wishlist
                <span className="badge ml-1">
                  <span className="far fa-heart fa-lg"></span>
                  <span className="badge-content icon-number">8</span>
                </span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className="btn link">
                Cart
                <span className="badge">
                  <span className="fas fa-shopping-cart"></span>
                  <span className="badge-content icon-number">8</span>
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
