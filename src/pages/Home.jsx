import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="app-shell">
      <div className="hero">
        <div className="badge">In-store & online</div>
        <h1>Objects built to last and feel good to use.</h1>
        <p>
          A minimal storefront concept: browse essentials, peek at product details, and mock a cart. Nothing is
          functional yet?this is a visual shell to explore flows.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Link className="cta" to="/shop">
            Start browsing
          </Link>
          <button className="nav-link active" type="button">
            Mock signup
          </button>
        </div>
      </div>

      <div className="section-title">
        <h2>Featured picks</h2>
        <Link className="nav-link" to="/shop">
          View all
        </Link>
      </div>

      <div className="grid">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
