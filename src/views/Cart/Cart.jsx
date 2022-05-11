import { Navbar, CartItem, CartSummary } from '../../components';
import { useCart } from '../../contexts/cart-context';
import { clearCartAPI } from '../../utils/cart-utils';
import './Cart.css';

export function Cart() {
  const { cart, dispatchCart } = useCart();

  return (
    <>
      <Navbar />
      <main className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          <div className="flex justify-space-between align-items-end">
            <h3 className="heading-3 mr-2">Cart</h3>
            <button className="btn link" onClick={() => clearCartAPI(dispatchCart)}>
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
