import React from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import HomePage from './Pages/Home';
import ContactPage from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Ourteam from './Pages/Ourteam';
// import useScrollToTop from './Pages/useScrollToTop';


function App() {

  // useScrollToTop();

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ourteam" element={<Ourteam />} />
     
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
