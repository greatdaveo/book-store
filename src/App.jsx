import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/error" element={<PageNotFound />} />
            <Route path="/products" element={<ProductDetail />} />
            <Route path="/register" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
