// src/App.tsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeroSection from './pages/HeroSection';
import DestinationsPage from "./pages/DestinationsPage";
import ContactPage from "./pages/ContactPage";
import TripTypesPage from "./pages/TripTypesPage";
import Home from "./pages/Home";
import FixedHeader from "./pages/FixedHeader";
// import HeroSection from './pages/HeroSection';
// import HeroSection from './pages/HeroSection';

const App = () => {
  return (
    <Router>
      <FixedHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/trip-types" element={<TripTypesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
