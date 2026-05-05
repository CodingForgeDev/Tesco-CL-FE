import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AnimatePresence } from "motion/react";
import { Header, Footer } from "./components/Navigation";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Contribution from "./pages/Contribution";
import QualityControl from "./pages/QualityControl";
import Products from "./pages/products";
import Seeds from "./pages/Seeds";
import Crops from "./pages/Crops";
import Companies from "./pages/Companies";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <div className="min-vh-100 d-flex flex-column bg-light" id="app-wrapper">
        <Header />
        <main className="flex-grow-1 pt-24" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contribution" element={<Contribution />} />
            <Route path="/quality" element={<QualityControl />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/seeds" element={<Seeds />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}
