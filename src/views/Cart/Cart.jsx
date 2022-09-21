import './Cart.css';
import { Navbar, CartItem, CartSummary } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/cartSlice';

export function Cart() {
  const { cart } = useSelector((store) => store.cartState);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <main className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          <div className="flex justify-space-between align-items-end">
            <h3 className="heading-3 mr-2">Cart</h3>
            <button className="btn link" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
          {cart.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </div>

        <CartSummary className="cart-summary" />
      </main>
    </>
  );
}
