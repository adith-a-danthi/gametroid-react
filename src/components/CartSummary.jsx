import { useCart } from '../contexts/cart-context';

export default function CartSummary() {
  const { cartSummary } = useCart();

  const { initialPrice, discount, qty, total } = cartSummary;

  return (
    <div className="cart-summary">
      <div className="card outlined-card card-content">
        <h4 className="heading-4">Price Details</h4>
        <hr />
        {/* <!-- Price --> */}
        <div className="flex justify-space-between">
          <p className="font-weight-bold">Price ( {qty} items)</p>
          <p>₹ {initialPrice}</p>
        </div>
        {/* <!-- Discount --> */}
        <div className="flex justify-space-between">
          <p className="font-weight-bold">Discount</p>
          <p>- ₹ {discount}</p>
        </div>
        {/* <!-- Delivery Charges --> */}
        <div className="flex justify-space-between">
          <p className="font-weight-bold">Delivery charges</p>
          <p>FREE</p>
        </div>
        <hr />
        {/* <!-- Total --> */}
        <div className="flex justify-space-between font-weight-bold">
          <p>TOTAL AMOUNT</p>
          <p>₹ {total}</p>
        </div>
        <hr />
        <button className="btn my-4 font-weight-bold">Place Order</button>
      </div>
    </div>
  );
}
