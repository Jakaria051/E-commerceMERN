import { Route, Routes } from "react-router-dom";

//Components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
//public pages
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

//protected user pages
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";

//protected admin pages:
import AdminUsersPage from "./pages/admin/AdminUserPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatPage from "./pages/admin/AdminChatPage";

function App() {
  return (
    <>
      {" "}
      <HeaderComponent />
      <Routes>
        {/* ROUTE for ChatComponent */}
        <Route element={<RoutesWithUserChatComponent />}>
          {/* Publicly ROUTES */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not found 404" />
        </Route>

        {/* END OF ROUTE for ChatComponent */}
        {/* USER PROTECTED ROUTES */}
        <Route element={<ProtectedRouteComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* ADMIN PROTECTED ROUTES */}
        <Route element={<ProtectedRouteComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
