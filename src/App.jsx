// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Preloader from './components/Pre';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import Resume from './components/Resume/Resume.jsx';
import Projects from './components/Projects/Projects.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Contact from './components/Contact/Contact.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import TopBar from './components/Navs/Topbar.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';


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
          <Route path="/" element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>} />
          <Route path="/about" element={
            <ErrorBoundary>
              <About />
            </ErrorBoundary>} />
          <Route path='/services' element={
            <ErrorBoundary>
              <Services />
            </ErrorBoundary>
          } />
          <Route path='/resume' element={
            <ErrorBoundary>
              <Resume />
            </ErrorBoundary>
          } />
          <Route path="/projects" element={
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>} />
          <Route path='/blogs' element={
            <ErrorBoundary>
              <Blogs />
            </ErrorBoundary>
          } />
          <Route path='/contacts' element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          } />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
