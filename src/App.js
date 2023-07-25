import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/payment.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderdetails.scss";
import "./styles/admindashboard.scss";
import "./styles/about.scss";
import "./styles/notfound.scss";
import "./styles/loader.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/shipping/Shipping";
import Confirmorder from "./components/shipping/Confirmorder";
import PaymentSuccess from "./components/shipping/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Myorders from "./components/Orders/Myorders";
import OrderDetails from "./components/Orders/OrderDetails";
import AdminDashboard from "./components/profile/AdminDashboard";
import Users from "./components/Users/Users";
import Orders from "./components/Users/Orders";
import About from "./components/about/About";
import NotFound from "./components/notFound/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        {/* Anyone Can Access these Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<NotFound />} />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />

        {/* Only Logged in persons can access */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirm" element={<Confirmorder />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        {/* Admin Routes */}
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user?.role === "admin"}
              redirectAdmin="/me"
            />
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
