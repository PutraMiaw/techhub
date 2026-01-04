# TechHub

TechHub adalah aplikasi e-commerce sederhana berbasis React + Vite yang menyediakan pengalaman belanja online untuk pelanggan serta panel admin untuk pengelolaan dasar.

Proyek ini masih dalam tahap pengembangan awal — beberapa fitur admin seperti pengelolaan produk dan user masih berstatus coming soon.

## 📂 Struktur Folder

tech-hub/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Banner.jsx
│ │ ├── CartItem.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Notification.jsx
│ │ └── ProductCard.jsx
│ ├── context/
│ │ ├── AuthContext.jsx
│ │ ├── CartContext.jsx
│ │ └── NotificationContext.jsx
│ ├── data/
│ │ └── products.json
│ │ └── users.json
│ ├── pages/
│ │ ├── AdminDashboard.jsx
│ │ ├── AdminLayout.jsx
│ │ ├── AdminLogin.jsx
│ │ ├── AdminSidebar.jsx
│ │ ├── Cart.jsx  
│ │ ├── Checkout.jsx
│ │ ├── Home.jsx
│ │ ├── ProductDetail.jsx
│ │ ├── Products.jsx
│ │ ├── UserLogin.jsx
│ │ └── UserRegister.jsx
│ ├── App.css (styling global)
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

## 🌟 Fitur Utama

### Untuk Pelanggan (User)

- Home Page – Tampilan utama dengan rekomendasi produk
- Products Page – Daftar semua produk
- Product Detail – Detail produk berdasarkan ID
- Cart – Kelola keranjang belanja
- Checkout – Proses checkout (simulasi)
- Authentication
  - Login
  - Register
- Notification System – Notifikasi global (contoh: berhasil tambah ke cart)

### Untuk Admin

- Admin Login – Autentikasi terpisah
- Admin Dashboard – Ringkasan dan navigasi admin
- Protected Routes – Semua route admin dilindungi dengan `RequireAdmin`
- Admin Layout – Header dan sidebar khusus admin (tanpa header/footer user biasa)
- Fitur pengelolaan (Products, Users, Reports) → Coming soon

### State Management

- `AuthContext` – Mengelola status login user & admin
- `CartContext` – Mengelola keranjang belanja
- `NotificationContext` – Mengelola notifikasi sementara

### Routing

Menggunakan React Router DOM v6 dengan route sebagai berikut:

User routes

- `/` → Home
- `/products` → Daftar produk
- `/product/:id` → Detail produk
- `/cart` → Keranjang
- `/checkout` → Checkout
- `/login` → Login user
- `/register` → Register user

Admin routes

- `/admin/login` → Login admin
- `/admin/dashboard` → Dashboard admin
- `/admin/products` → (coming soon)
- `/admin/users` → (coming soon)
- `/admin/reports` → (coming soon)

Route tidak ditemukan (`*`) akan redirect ke Home.

## 🛠️ Teknologi & Dependencies

| Kategori     | Paket                | Versi   |
| ------------ | -------------------- | ------- |
| Runtime      | react                | ^19.2.0 |
|              | react-dom            | ^19.2.0 |
| Routing      | react-router-dom     | ^7.10.1 |
| Build Tool   | vite                 | ^7.2.4  |
| React Plugin | @vitejs/plugin-react | ^5.1.1  |
| Deployment   | gh-pages             | ^6.3.0  |
| Linting      | eslint               | ^9.39.1 |
| Types        | @types/react         | ^19.2.5 |
|              | @types/react-dom     | ^19.2.3 |

Styling menggunakan CSS vanilla (global di `App.css` dan komponen masing-masing).
