import './ProductCard.css';

export default function ProductCard({ product }) {
  const { title, price, imageURL, discount, rating } = product;

  const finalPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="card outlined-card ecomm">
      {/* Image */}
      <img className="card-img fit" src={imageURL} alt="gta5" />
      <div className="card-badge">
        <span className="fas fa-star mr-1"></span>
        {rating}
      </div>
      <div className="card-content flex-1">
        {/* Title */}
        <div className="card-title">{title}</div>
        {/* Price Section */}
        <div className="card-price flex-1">
          {discount !== 0 && (
            <p>
              <span className="price-before"> ₹ {price} </span>
              <span className="price-discount"> (-{discount}%) </span>
            </p>
          )}
          <span className="price-now"> ₹ {finalPrice} </span>
        </div>
        {/* Action Buttons */}
        <div className="card-actions">
          <button className="btn flex-1">
            <span className="fas fa-shopping-cart"></span>
            Add to Cart
          </button>
          <button className="btn outlined">
            <span className="far fa-heart"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
