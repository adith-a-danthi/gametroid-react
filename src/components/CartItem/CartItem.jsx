import { useCart } from '../../contexts/cart-context';
import { useWishlist } from '../../contexts/wishlist-context';
import { removeFromCartAPI, updateQuantityAPI } from '../../utils/cart-utils';
import { addToWishlistAPI } from '../../utils/wishlist-utils';
import './CartItem.css';

export default function CartItem({ product }) {
  const { dispatchCart } = useCart();
  const { dispatchWishlist } = useWishlist();

  const { title, price, imageURL, discount, qty } = product;
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  const moveToWishlist = () => {
    removeFromCartAPI(dispatchCart, product);
    addToWishlistAPI(dispatchWishlist, product);
  };

  const decreseQuantity = () => {
    product.qty === 1
      ? removeFromCartAPI(dispatchCart, product)
      : updateQuantityAPI(dispatchCart, product, 'decrement');
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
            onClick={() => updateQuantityAPI(dispatchCart, product, 'increment')}>
            <span className="fas fa-plus"></span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 fluid-grid">
          <button
            className="btn outlined my-2"
            onClick={() => removeFromCartAPI(dispatchCart, product)}>
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
