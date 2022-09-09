import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/productsSlice';

export default function CategoriesSection() {
  const { categories } = useSelector((store) => store.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
