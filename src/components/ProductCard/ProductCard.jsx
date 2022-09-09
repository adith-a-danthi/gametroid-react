import './ProductCard.css';

import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from '../../contexts/auth-context';
import { addToCart } from '../../features/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../features/wishlistSlice';

export default function ProductCard({ product }) {
  const { title, price, imageURL, discount, rating } = product;
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  // Hooks
  const { authState } = useAuth();
  const navigate = useNavigate();

  const { cart } = useSelector((store) => store.cartState);
  const { wishlist } = useSelector((store) => store.wishlistState);
  const dispatch = useDispatch();

  const isWishlisted = wishlist.some((item) => item._id === product._id);

  const addProductToCart = async () => {
    if (authState.isAuthenticated) {
      const itemInCart = cart.find((item) => item._id === product._id);
      if (itemInCart) {
        navigate('/cart');
      } else {
        dispatch(addToCart(product));
      }
    } else {
      navigate('/login');
    }
  };

  const addProductToWishlist = () => {
    if (authState.isAuthenticated) {
      isWishlisted ? dispatch(removeFromWishlist(product)) : dispatch(addToWishlist(product));
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
          <button className="btn flex-1" onClick={() => addProductToCart()}>
            <span className="fas fa-shopping-cart mr-2"></span>
            Add to Cart
          </button>
          <button className="btn outlined" onClick={() => addProductToWishlist()}>
            <span className={isWishlisted ? 'fas fa-heart' : 'far fa-heart'}></span>
          </button>
        </div>
      </div>
    </div>
  );
}
