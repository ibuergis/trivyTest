import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="thumb">{product.name.split(' ')[0]}</div>
      <div className="price-row">
        <span className="price">${product.price}</span>
        <span className="badge">{product.badge}</span>
      </div>
      <strong>{product.name}</strong>
      <p>{product.tagline}</p>
      <Link className="nav-link active" to={`/product/${product.id}`}>
        View details
      </Link>
    </div>
  );
}
