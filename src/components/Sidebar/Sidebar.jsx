import './Sidebar.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCategory,
  clearFilters,
  highToLow,
  lowToHigh,
  removeCategory,
  updatePriceRange,
  updateRating,
} from '../../features/filterSlice.js';
import { getCategories } from '../../features/productsSlice';

export default function Sidebar() {
  const { categories: categoriesState } = useSelector((store) => store.productsState);

  const { categories, sortBy, rating, priceRange } = useSelector((store) => store.filterState);
  const dispatch = useDispatch();

  const categoryClickHandler = (category) => {
    categories.includes(category)
      ? dispatch(removeCategory(category))
      : dispatch(addCategory(category));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <aside className="sidebar">
      <div className="flex justify-space-between">
        <h4 className="heading-4">Filters</h4>
        <button className="btn link" onClick={() => dispatch(clearFilters())}>
          Clear
        </button>
      </div>
      <hr />

      {/* Price */}
      <div className="my-4">
        <h5 className="heading-5">Price</h5>
        <article>
          <input
            type="range"
            min="0"
            max="50000"
            step="2500"
            value={priceRange}
            list="tickmarks"
            className="slider"
            onChange={(e) => dispatch(updatePriceRange(e.target.value))}
          />
          <datalist id="tickmarks" className="flex justify-space-between text-sm">
            <option value="0" className="font-weight-bold" label="0"></option>
            <option value="10000" className="font-weight-bold" label="10K"></option>
            <option value="20000" className="font-weight-bold" label="20K"></option>
            <option value="30000" className="font-weight-bold" label="30K"></option>
            <option value="40000" className="font-weight-bold" label="40K"></option>
            <option value="50000" className="font-weight-bold" label="50K+"></option>
          </datalist>
        </article>
      </div>

      {/* Categories */}
      <div className="my-4">
        <h5 className="heading-5">Category</h5>
        <ul className="sidebar-list">
          {categoriesState.map(({ categoryName }, index) => (
            <li key={index}>
              <input
                className="input"
                type="checkbox"
                id={categoryName}
                name={categoryName}
                checked={categories.includes(categoryName)}
                onChange={() => categoryClickHandler(categoryName)}
              />
              <label className="text-base ml-2" htmlFor={categoryName}>
                {categoryName}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Sort By */}
      <div className="my-4">
        <h5 className="heading-5">Sort By</h5>
        <ul className="sidebar-list">
          <li>
            <input
              className="input"
              type="radio"
              id="price-low"
              name="sortBy"
              checked={sortBy === 'LOW_TO_HIGH'}
              onChange={() => dispatch(lowToHigh())}
            />
            <label className="text-base ml-2" htmlFor="price-low">
              Price (Low to High)
            </label>
          </li>
          <li>
            <input
              className="input"
              type="radio"
              id="price-high"
              name="sortBy"
              checked={sortBy === 'HIGH_TO_LOW'}
              onChange={() => dispatch(highToLow())}
            />
            <label className="text-base ml-2" htmlFor="price-high">
              Price (High to Low)
            </label>
          </li>
        </ul>
      </div>

      {/* Rating */}
      <div className="my-4">
        <h5 className="heading-5">Ratings</h5>
        <ul className="sidebar-list">
          <li>
            <input
              className="input"
              type="radio"
              id="4stars"
              name="ratings"
              checked={rating === 4}
              onChange={() => dispatch(updateRating(4))}
            />
            <label className="text-base ml-2" htmlFor="4stars">
              4 Stars & Above
            </label>
          </li>
          <li>
            <input
              className="input"
              type="radio"
              id="3stars"
              name="ratings"
              checked={rating === 3}
              onChange={() => dispatch(updateRating(3))}
            />
            <label className="text-base ml-2" htmlFor="3stars">
              3 Stars & Above
            </label>
          </li>
          <li>
            <input
              className="input"
              type="radio"
              id="2stars"
              name="ratings"
              checked={rating === 2}
              onChange={() => dispatch(updateRating(2))}
            />
            <label className="text-base ml-2" htmlFor="2stars">
              2 Stars & Above
            </label>
          </li>
          <li>
            <input
              className="input"
              type="radio"
              id="1star"
              name="ratings"
              checked={rating === 1}
              onChange={() => dispatch(updateRating(1))}
            />
            <label className="text-base ml-2" htmlFor="1star">
              1 Star & Above
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
}
