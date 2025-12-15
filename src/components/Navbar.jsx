import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">SS</div>
        <div>
          Simple Shop
          <div className="muted-link">non-functional prototype</div>
        </div>
      </div>
      <nav className="nav-links">
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/shop">
          Shop
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/cart">
          Cart
        </NavLink>
        <button className="cta" type="button" aria-label="Open account actions">
          Login
        </button>
      </nav>
    </header>
  );
}
