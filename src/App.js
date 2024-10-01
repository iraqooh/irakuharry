import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import BiographyPage from './pages/BiographyPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div>
      <Router>
        <div>
          {/* Navigation Bar */}
          <NavbarComponent />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<BiographyPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
