import { useProducts } from '../contexts/product-context';

export default function CategoriesSection() {
  const { categories } = useProducts();

  return (
    <div className="grid grid-cols-3 fluid-grid gap-1">
      {categories.map(({ _id, categoryImage, categoryName }) => (
        <div className="card" key={_id}>
          <a href="#">
            <img src={categoryImage} alt={categoryName} className="card-img fill-height" />
            <div className="card-overlay">
              <h3 className="heading-3">{categoryName} &gt;</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
