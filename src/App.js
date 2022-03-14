import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import ParticleBackground from './components/particleBackground';
import Nav from './components/Nav';
import About from './components/About';
import Projects from '../src/components/Projects';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'My Projects', description: 'Photos of projects'},
    { name: 'Resume', description: 'Download my resume' },
    { name: 'Other', description: 'Other description' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

    return (
      <Router basename={process.env.PUBLIC_URL}>
              <Nav  categories={categories} 
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
              ></Nav>
              {!contactSelected ? (
                <>
                <Projects currentCategory={currentCategory}></Projects>
                <About></About>
                </>
              ) : ( 
                <ContactForm></ContactForm>
              )}
              <ParticleBackground></ParticleBackground>
          <Footer />
      </Router>
    );
  }

export default App;
