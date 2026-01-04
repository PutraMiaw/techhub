import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import AdminLogin from "./pages/AdminLogin";

import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import RequireAdmin from "./components/RequireAdmin";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="app">
      {/* Header user HANYA muncul kalau BUKAN halaman admin */}
      {!isAdminPage && <Header />}

      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* User Auth */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />

          {/* Admin Routes */}
          <Route path="/admin">
            <Route index element={<Navigate to="/admin/login" replace />} />
            <Route path="login" element={<AdminLogin />} />

            {/* Protected Admin Routes - pakai AdminLayout yang sudah ada AdminHeader */}
            <Route
              element={
                <RequireAdmin>
                  <AdminLayout />
                </RequireAdmin>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route
                path="products"
                element={
                  <div className="admin-page">
                    <h2>Kelola Produk</h2>
                    <p>Coming soon...</p>
                  </div>
                }
              />
              <Route
                path="users"
                element={
                  <div className="admin-page">
                    <h2>Kelola User</h2>
                    <p>Coming soon...</p>
                  </div>
                }
              />
              <Route
                path="reports"
                element={
                  <div className="admin-page">
                    <h2>Laporan</h2>
                    <p>Coming soon...</p>
                  </div>
                }
              />
            </Route>
          </Route>

          {/* 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer hanya muncul kalau BUKAN halaman admin */}
      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <CartProvider>
          <Router basename="/techhub">
            <AppContent />
          </Router>
        </CartProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}

export default App;
