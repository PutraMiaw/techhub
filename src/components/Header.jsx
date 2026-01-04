import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; // Tambah ini

const Header = () => {
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth(); // Ambil data user & fungsi logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Kembali ke home setelah logout
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span style={{ color: "#60a5fa" }}>Tech</span>Hub
        </Link>

        <nav className="nav-links">
          <Link to="/">Beranda</Link>
          <Link to="/products">Produk</Link>
          <Link to="/cart" className="cart-icon">
            <span>Keranjang</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>

          {/* Kondisi Login / Logout */}
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
      </div>
    </header>
  );
};

export default Header;
