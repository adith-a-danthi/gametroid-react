import './WishlistItem.css';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { removeFromWishlist } from '../../features/wishlistSlice';

export default function WishlistItem({ product }) {
  const { title, price, imageURL, discount } = product;

  const dispatch = useDispatch();

  const moveToCart = () => {
    dispatch(removeFromWishlist(product));
    dispatch(addToCart(product));
  };

  const finalPrice = discount ? price - (price * discount) / 100 : price;
  return (
    <div className="card outlined-card wishlist-item">
      {/* Image */}
      <img className="card-img fit" src={imageURL} alt={title} />

      <button
        className="btn fab small-fab btn-secondary wishlist-action"
        onClick={() => dispatch(removeFromWishlist(product))}>
        <i className="fas fa-heart"></i>
      </button>
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
        <button className="btn" onClick={moveToCart}>
          Move to Cart
        </button>
      </div>
    </div>
  );
}
