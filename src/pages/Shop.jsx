import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  return (
    <div className="app-shell">
      <div className="section-title">
        <h2>Shop everything</h2>
        <span className="muted-link">Non-functional checkout demo</span>
      </div>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
