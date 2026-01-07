import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="header">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <span style={{ color: "#60a5fa" }}>Tech</span>Hub
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-only">
          <Link to="/">Beranda</Link>
          <Link to="/products">Produk</Link>

          <Link to="/cart" className="cart-icon">
            <span>Keranjang</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>

          {currentUser ? (
            <>
              <span className="user-greeting">Hi, {currentUser.username}!</span>
              <button onClick={handleLogout} className="btn btn-outline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav className="mobile-nav-menu">
          <Link to="/" onClick={toggleMenu}>
            Beranda
          </Link>
          <Link to="/products" onClick={toggleMenu}>
            Produk
          </Link>

          <Link to="/cart" onClick={toggleMenu}>
            Keranjang ({cartCount})
          </Link>

          {currentUser ? (
            <>
              <div className="user-greeting mobile">
                Hi, {currentUser.username}!
              </div>
              <button onClick={handleLogout} className="btn btn-outline mobile">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline mobile"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link to="/register" className="btn mobile" onClick={toggleMenu}>
                Register
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
