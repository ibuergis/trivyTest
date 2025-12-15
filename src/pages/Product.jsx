import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function Product() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="app-shell">
        <div className="card">
          <strong>Product not found</strong>
          <p>The item you are looking for is not part of this mock catalog.</p>
          <Link className="nav-link active" to="/shop">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell layout-2col">
      <div className="panel">
        <div className="thumb" style={{ height: '240px', fontSize: '24px' }}>
          {product.name}
        </div>
        <div className="line" />
        <div className="price-row">
          <span className="price">${product.price}</span>
          <span className="badge">{product.badge}</span>
        </div>
        <h2>{product.name}</h2>
        <p style={{ color: 'var(--muted)' }}>
          {product.tagline} ? this detail page is purely visual. Use it to test navigation, pricing layouts, and CTA
          placement without any backend wiring.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button className="cta" type="button">
            Add to cart (mock)
          </button>
          <button className="nav-link active" type="button">
            Save for later
          </button>
        </div>
      </div>

      <div className="panel">
        <h3>Shipping & returns</h3>
        <p style={{ color: 'var(--muted)' }}>
          Pretend policy: free shipping over $75, 30-day returns. This is placeholder text for flow exploration only.
        </p>
        <div className="line" />
        <h3>Customer notes</h3>
        <p style={{ color: 'var(--muted)' }}>
          Imagine reviews here. Keep the structure; wire it up later.
        </p>
        <Link className="nav-link" to="/cart">
          Jump to cart mock
        </Link>
      </div>
    </div>
  );
}
