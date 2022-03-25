import { useProducts } from '../../contexts/product-context';
import './Sidebar.css';

export default function Sidebar() {
  const { filtersState, filtersDispatch } = useProducts();
  const { categories, sortBy, rating, priceRange } = filtersState;

  const categoryClickHandler = (category) => {
    const type = categories.includes(category) ? 'REMOVE_CATEGORY' : 'ADD_CATEGORY';
    filtersDispatch({ type, payload: category });
  };

  return (
    <aside className="sidebar">
      <div className="flex justify-space-between">
        <h4 className="heading-4">Filters</h4>
        <button className="btn link" onClick={() => filtersDispatch({ type: 'CLEAR_FILTERS' })}>
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
            onChange={(e) => filtersDispatch({ type: 'PRICE_RANGE', payload: e.target.value })}
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
          <li>
            <input
              className="input"
              type="checkbox"
              id="games"
              name="games"
              checked={categories.includes('games')}
              onChange={() => categoryClickHandler('games')}
            />
            <label className="text-base ml-2" htmlFor="games">
              Games
            </label>
          </li>
          <li>
            <input
              className="input"
              type="checkbox"
              id="consoles"
              name="consoles"
              checked={categories.includes('consoles')}
              onChange={() => categoryClickHandler('consoles')}
            />
            <label className="text-base ml-2" htmlFor="consoles">
              Consoles
            </label>
          </li>
          <li>
            <input
              className="input"
              type="checkbox"
              id="accessories"
              name="accessories"
              checked={categories.includes('accessories')}
              onChange={() => categoryClickHandler('accessories')}
            />
            <label className="text-base ml-2" htmlFor="accessories">
              Accessories
            </label>
          </li>
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
              onChange={() => filtersDispatch({ type: 'LOW_TO_HIGH', payload: 'LOW_TO_HIGH' })}
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
              onChange={() => filtersDispatch({ type: 'HIGH_TO_LOW', payload: 'HIGH_TO_LOW' })}
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
              onChange={() => filtersDispatch({ type: 'RATING', payload: 4 })}
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
              onChange={() => filtersDispatch({ type: 'RATING', payload: 3 })}
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
              onChange={() => filtersDispatch({ type: 'RATING', payload: 2 })}
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
              onChange={() => filtersDispatch({ type: 'RATING', payload: 1 })}
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
