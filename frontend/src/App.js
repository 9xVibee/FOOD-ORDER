import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import FoodDetails from "./components/foodDetails/FoodDetails";
import FoodCatelog from "./components/foodCatelog/FoodCatelog";
import Create from "./components/create/Create";
import CheckOut from "./components/checkout/CheckOut";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/foods/:id" element={<FoodCatelog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
