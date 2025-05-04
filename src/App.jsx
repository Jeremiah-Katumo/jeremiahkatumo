// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Preloader from './components/Pre';
import Home from './components/Home/Home';
import Footer from './components/Footer';
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
import TopBar from './components/Topbar.jsx';
import Contact from './components/Contact/Contact.jsx';

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
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <TopBar />
        {/* <NavBar /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/resume' element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
