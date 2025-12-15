import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Cart() {
  const cartMock = products.slice(0, 2);
  const subtotal = cartMock.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-shell layout-2col">
      <div className="panel">
        <h2>Your cart (mock)</h2>
        <p className="muted-link">Buttons do nothing yet?wire them up when ready.</p>
        <div className="line" />
        {cartMock.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <strong>{item.name}</strong>
              <span className="muted-link">1 x ${item.price}</span>
            </div>
            <button className="nav-link active" type="button">
              Remove
            </button>
          </div>
        ))}
        <div className="line" />
        <div className="price-row">
          <strong>Subtotal</strong>
          <strong>${subtotal}</strong>
        </div>
      </div>

      <div className="panel">
        <h3>Checkout preview</h3>
        <p style={{ color: 'var(--muted)' }}>
          This is a static illustration of a future checkout block. Show totals, shipping, or any marketing copy here.
        </p>
        <button className="cta" type="button" style={{ width: '100%', marginTop: '10px' }}>
          Continue to payment (mock)
        </button>
        <Link className="nav-link" to="/shop" style={{ display: 'inline-block', marginTop: '10px' }}>
          Keep browsing
        </Link>
      </div>
    </div>
  );
}
