// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';
import Schedule from './components/Schedule';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <div id="/"><Home/></div>
            <div id="about"><About/></div>
            <div id="services"><Services/></div>
            <div id="contact"><Contact/></div>
          
            <Footer1/>
            <Footer/>
          </div>
        } />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
