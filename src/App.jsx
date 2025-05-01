// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import AdminLoginPage from "./pages/AdminLoginpage"; // Admin login page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLoginPage />} /> {/* Admin Login route */}
        <Route path="/contact" element={<Contact/>} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
