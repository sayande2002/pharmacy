import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RenderPage from "utils/RenderPage";
import "./styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tippy/dist/tippy.css";
const HomePage = lazy(() => import("pages/HomePage"));
const ShopPage = lazy(() => import("pages/ShopPage"));
const CartPage = lazy(() => import("pages/CartPage"));
const SignupPage = lazy(() => import("pages/SignupPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const EnterPage = lazy(() => import("pages/EnterPage"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<RenderPage Page={HomePage} />} />
      <Route path="/shop/*" element={<RenderPage Page={ShopPage} />} />
      <Route path="/cart" element={<RenderPage Page={CartPage} />} />
      <Route path="/login" element={<RenderPage Page={LoginPage} />} />
      <Route path="/signup" element={<RenderPage Page={SignupPage} />} />
      <Route path="/enter" element={<RenderPage Page={EnterPage} />} />
      <Route path="*" element={<RenderPage Page={ErrorPage} />} />
    </Routes>
  );
}

export default App;
