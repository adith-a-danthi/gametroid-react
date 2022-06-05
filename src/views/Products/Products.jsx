import { Navbar, Sidebar, ProductCard } from '../../components';
import { useProducts } from '../../contexts/product-context';
import { getFilteredProducts } from '../../utils/product-utils';
import './Products.css';

export function Products() {
  const { products, filtersState } = useProducts();

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
