// App.jsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponen utama
import Layout from './components/Layout';
import Home from './sections/Home';

// Halaman tambahan
import ReadMoreHero from './pages/ReadMoreHero';
import ReachUsHero from './pages/ReachUsHero';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute dengan Layout untuk membungkus Header dan halaman utama */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="read-more-hero" element={<ReadMoreHero />} />
          <Route path="reach-us-hero" element={<ReachUsHero />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
