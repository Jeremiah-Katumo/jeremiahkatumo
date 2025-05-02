// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Pre';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import Resume from './components/Resume/Resume.jsx';
import Projects from './components/Projects/Projects.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200)

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/resume' element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
