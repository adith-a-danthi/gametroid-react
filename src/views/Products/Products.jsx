import './Products.css';
import { Navbar, Sidebar, ProductCard } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../features/productsSlice';
import { getFilteredProducts } from '../../utils/product-utils';

export function Products() {
  const filterState = useSelector((store) => store.filterState);
  const { products } = useSelector((store) => store.productsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filteredProducts = getFilteredProducts(products, filterState);

  return (
    <>
      <Navbar />
      <main className="shop-layout">
        <Sidebar />
        {/* Products List */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
