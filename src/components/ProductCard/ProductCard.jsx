import { useCart } from '../../contexts/cart-context';
import { useWishlist } from '../../contexts/wishlist-context';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { title, price, imageURL, discount, rating } = product;
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  const { dispatchCart } = useCart();
  const { wishlist, dispatchWishlist } = useWishlist();
  const isWishlisted = wishlist.some((item) => item._id === product._id);

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
          <button
            className="btn flex-1"
            onClick={() => dispatchCart({ type: 'ADD_TO_CART', payload: product })}>
            <span className="fas fa-shopping-cart mr-2"></span>
            Add to Cart
          </button>
          <button
            className="btn outlined"
            onClick={() =>
              dispatchWishlist({
                type: isWishlisted ? 'REMOVE_FROM_WISHLIST' : 'ADD_TO_WISHLIST',
                payload: product,
              })
            }>
            <span className={isWishlisted ? 'fas fa-heart' : 'far fa-heart'}></span>
          </button>
        </div>
      </div>
    </div>
  );
}
