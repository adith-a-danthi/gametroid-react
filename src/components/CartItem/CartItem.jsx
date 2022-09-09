import './CartItem.css';

import { useDispatch } from 'react-redux';
import { useWishlist } from '../../contexts/wishlist-context';
import { removeFromCart, updateQuantity } from '../../features/cartSlice';
import { addToWishlistAPI } from '../../utils/wishlist-utils';

export default function CartItem({ product }) {
  const { dispatchWishlist } = useWishlist();
  const dispatch = useDispatch();

  const { title, price, imageURL, discount, qty } = product;
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  const moveToWishlist = () => {
    dispatch(removeFromCart(product));
    addToWishlistAPI(dispatchWishlist, product);
  };

  const decreseQuantity = () => {
    product.qty === 1
      ? dispatch(removeFromCart(product))
      : dispatch(updateQuantity({ product, type: 'decrement' }));
  };

  return (
    <div className="card outlined-card cart-item flex">
      <img className="card-img" src={imageURL} alt={title} />

      <div className="card-content flex-1">
        <div className="heading-4">{title}</div>

        {/* Price */}
        <div className="card-price flex-1">
          {discount !== 0 && (
            <p>
              <span className="price-before"> ₹ {price} </span>
              <span className="price-discount"> (-{discount}%) </span>
            </p>
          )}
          <span className="price-now"> ₹ {finalPrice} </span>
        </div>

        {/* Quantity */}
        <div className="flex gap-2 align-items-center my-4">
          <strong className="text-base">Quantity: </strong>
          <button className="btn" onClick={() => decreseQuantity()}>
            <span className="fas fa-minus"></span>
          </button>
          <p className="quantity">{qty}</p>
          <button
            className="btn"
            onClick={() => dispatch(updateQuantity({ product, type: 'increment' }))}>
            <span className="fas fa-plus"></span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 fluid-grid">
          <button className="btn outlined my-2" onClick={() => dispatch(removeFromCart(product))}>
            Remove from cart
          </button>
          <button className="btn outlined my-2" onClick={moveToWishlist}>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
