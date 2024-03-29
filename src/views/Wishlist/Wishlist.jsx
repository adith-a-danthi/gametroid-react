import { useSelector } from 'react-redux';
import { Navbar, WishlistItem } from '../../components';

import './Wishlist.css';

export function Wishlist() {
  const { wishlist } = useSelector((store) => store.wishlistState);

  return (
    <div className="">
      <Navbar />
      <main className="wishlist-layout">
        {/* Wishlist Items */}
        <h3 className="heading-3 text-center">Wishlist</h3>
        <div className="wishlist-items">
          {wishlist.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
