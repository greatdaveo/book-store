import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import SharedLayouts from "./components/SharedLayouts";
import CartPage from "./pages/Cart/CartPage";
import DashboardPage from "./pages/DashBoard/DashboardPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/Order/OrderPage";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/Products/ProductList";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScrollToTop";

// REACT TOASTIFY IMPORTS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer
          closeButton={false}
          autoClose={3000}
          position={"bottom-center"}
        />
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/error" element={<PageNotFound />} />
            <Route path="/register" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
