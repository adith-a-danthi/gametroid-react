import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get('/api/categories');
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
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
