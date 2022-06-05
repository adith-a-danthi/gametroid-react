import { useNavigate } from 'react-router';
import { useCart } from '../../contexts/cart-context';
import { useWishlist } from '../../contexts/wishlist-context';
import { useAuth } from '../../contexts/auth-context';
import { addToCartAPI } from '../../utils/cart-utils';
import { addToWishlistAPI, removeFromWishlistAPI } from '../../utils/wishlist-utils';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { title, price, imageURL, discount, rating } = product;
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  // Hooks
  const { cart, dispatchCart } = useCart();
  const { wishlist, dispatchWishlist } = useWishlist();
  const { authState } = useAuth();
  const navigate = useNavigate();

  const isWishlisted = wishlist.some((item) => item._id === product._id);

  const addToCart = async () => {
    if (authState.isAuthenticated) {
      const itemInCart = cart.find((item) => item._id === product._id);
      if (itemInCart) {
        navigate('/cart');
      } else {
        addToCartAPI(dispatchCart, product);
      }
    } else {
      navigate('/login');
    }
  };

  const addToWishlist = () => {
    if (authState.isAuthenticated) {
      isWishlisted
        ? removeFromWishlistAPI(dispatchWishlist, product)
        : addToWishlistAPI(dispatchWishlist, product);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="card outlined-card ecomm">
      {/* Image */}
      <img className="card-img fit" src={imageURL} alt="gta5" />
      <div className="card-badge">
        <span className="fas fa-star mr-1"></span>
        {rating}
      </div>
      <div className="card-content flex-1">
        {/* Title */}
        <div className="card-title">{title}</div>
        {/* Price Section */}
        <div className="card-price flex-1">
          {discount !== 0 && (
            <p>
              <span className="price-before"> ₹ {price} </span>
              <span className="price-discount"> (-{discount}%) </span>
            </p>
          )}
          <span className="price-now"> ₹ {finalPrice} </span>
        </div>
        {/* Action Buttons */}
        <div className="card-actions">
          <button className="btn flex-1" onClick={() => addToCart()}>
            <span className="fas fa-shopping-cart mr-2"></span>
            Add to Cart
          </button>
          <button className="btn outlined" onClick={() => addToWishlist()}>
            <span className={isWishlisted ? 'fas fa-heart' : 'far fa-heart'}></span>
          </button>
        </div>
      </div>
    </div>
  );
}
