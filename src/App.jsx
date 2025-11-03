import { Routes, Route, useNavigate, Navigate } from "react-router-dom"; // Import Navigate here
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import BlogList from "./components/BlogList";
import BlogDetail from "./pages/BlogDetail";
import CheckoutPage from "./components/CheckoutPage";
import { useAuth } from "./components/authContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import { useEffect } from "react";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();
  const isMinimalLayout = location.pathname === "/home";
  useEffect(() => {
    if (user && location.pathname === "/login") {
      navigate("/admin-dashboard"); 
    }
  }, [user, navigate]);

  return (
    <>
      {!isMinimalLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>

      {!isMinimalLayout && <Footer />}
      {!isMinimalLayout && <ScrollToTopButton />}
      <ToastContainer />
    </>
  );
};

export default App;
