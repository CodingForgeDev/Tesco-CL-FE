import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./components/Navigation";
import WhatsAppButton from "./components/WhatsAppButton";
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
  return (
    <Router>
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
