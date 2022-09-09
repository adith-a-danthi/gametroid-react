import { Navbar, Sidebar, ProductCard } from '../../components';
import { useProducts } from '../../contexts/product-context';
import { getFilteredProducts } from '../../utils/product-utils';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../features/productsSlice';
import './Products.css';

export function Products() {
  const { filtersState } = useProducts();
  const { products } = useSelector((store) => store.productsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filteredProducts = getFilteredProducts(products, filtersState);

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
