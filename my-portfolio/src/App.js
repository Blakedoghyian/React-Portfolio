import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import ParticleBackground from './components/particleBackground';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'My Projects', description: 'Photos of projects'},
    { name: 'Resume', description: 'Download my resume' },
    { name: 'Other', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

    return (
      <Router>

        <Container className="p-0" fluid={true}>
              <Nav  categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
              ></Nav>
              {!contactSelected ? (
                <>
                <About></About>
                <Projects></Projects>
                </>
              ) : ( 
                <ContactForm></ContactForm>
              )}
              <ParticleBackground></ParticleBackground>
          <Footer />
        </Container>
      </Router>
    );
  }

export default App;
