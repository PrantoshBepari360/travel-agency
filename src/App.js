import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Home/Login/Login/Login";
import Register from "./components/Home/Login/Register/Register.js";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Services from "./components/Services/Services";
import Cart from './components/Cart/Cart';
import BlogDetails from './components/BlogDetails/BlogDetails';
import AboutUs from "./components/AboutUs/AboutUs/AboutUs.js";
import ContactUs from './components/ContactUs/ContactUs/ContactUs';
import AddProduct from "./components/Deshboard/AddProduct/AddProduct.js";
import Dashboard from "./components/Deshboard/Dashboard/Dashboard.js";
import DashboardHome from "./components/Deshboard/DashboardHome/DashboardHome.js";
import MakeAdmin from "./components/Deshboard/MakeAdmin/MakeAdmin.js";
import ManageAllOrders from "./components/Deshboard/ManageAllOrders/ManageAllOrders.js";
import ManageProducts from "./components/Deshboard/ManageProducts/ManageProducts.js";
import MyOrders from "./components/Deshboard/MyOrders/MyOrders.js";
import UserReview from "./components/Deshboard/UserReview/UserReview.js";
import PrivetRoute from './components/Home/Login/PrivetRoute/PrivetRoute';
import AdminRoute from './components/Home/Login/AdminRoute/AdminRoute';
import NotFound from "./components/NotFound/NotFound";
import Blogs from "./components/Blogs/Blog/Blog";

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/details/:_id" element={<BlogDetails />} />
            <Route path="/addCart/:_id" element={<PrivetRoute><Cart /></PrivetRoute>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/dashboard" element={<PrivetRoute><Dashboard /></PrivetRoute> }>
            <Route exact path="/dashboard" element={<DashboardHome />} />
            <Route path={`/dashboard/myOrder`} element={<MyOrders />} />
            <Route path={`/dashboard/addReview`} element={<UserReview />} />
            <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            <Route path={`/dashboard/manageAllOrders`} element={<AdminRoute><ManageAllOrders /></AdminRoute>} />
            <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={  <NotFound /> } />
          </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
