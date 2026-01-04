import { createContext, useContext, useState, useEffect } from "react";
import usersData from "../data/users.json";
import { useNotification } from "./NotificationContext"; // Ini tetap

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { showNotification } = useNotification(); // UBAH: dari addNotification jadi showNotification

  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("usersData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUsers(parsed.users || []);
      setAdmins(parsed.admins || []);
    } else {
      setUsers(usersData.users);
      setAdmins(usersData.admins);
      localStorage.setItem("usersData", JSON.stringify(usersData));
    }

    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const saveToStorage = () => {
    localStorage.setItem("usersData", JSON.stringify({ users, admins }));
  };

  const login = (username, password, role) => {
    let foundUser = null;

    if (role === "user") {
      foundUser = users.find(
        (u) => u.username === username && u.password === password
      );
    } else if (role === "admin") {
      foundUser = admins.find(
        (u) => u.username === username && u.password === password
      );
    }

    if (foundUser) {
      const userData = { username: foundUser.username, role };
      setCurrentUser(userData);
      localStorage.setItem("currentUser", JSON.stringify(userData));
      showNotification(`Selamat datang, ${username}!`, "success"); // UBAH ke showNotification
      return true;
    } else {
      showNotification("Username atau password salah!", "error"); // UBAH
      return false;
    }
  };

  const register = (username, email, password) => {
    if (!username || !email || !password) {
      showNotification("Semua field harus diisi!", "error");
      return false;
    }
    if (password.length < 6) {
      showNotification("Password minimal 6 karakter!", "error");
      return false;
    }
    if (users.some((u) => u.username === username)) {
      showNotification("Username sudah digunakan!", "error");
      return false;
    }
    if (users.some((u) => u.email === email)) {
      showNotification("Email sudah terdaftar!", "error");
      return false;
    }

    const newUser = { username, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveToStorage();
    showNotification("Registrasi berhasil! Silakan login.", "success"); // UBAH
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    showNotification("Berhasil logout", "info"); // UBAH
  };

  const value = {
    currentUser,
    users,
    admins,
    login,
    register,
    logout,
    isAuthenticated: !!currentUser,
    isAdmin: currentUser?.role === "admin",
    isUser: currentUser?.role === "user",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
