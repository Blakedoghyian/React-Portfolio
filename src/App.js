import './App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

import ParticleBackground from './components/particleBackground';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Blake Doghyian',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'My Projects',
        subtitle: '',
        text: '',
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Reach out'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand className="grey"><span role="img" aria-label="mountain"> 🏔️</span>Blake Doghyian</Navbar.Brand>
          <Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className='grey mx-2 nostyle' to="/">Home</Link>
              <Link className='grey mx-2 nostyle' to="/about">About</Link>
              <Link className='grey mx-2 nostyle' to="/resume">Resume</Link>
              <Link className='grey mx-2 nostyle' to="/contact">Contact</Link>

              
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          <Routes>

          <Route path="/" element={<Projects/>} exact />
          <Route path="/about" element={<About/>} exact />
          <Route path="/resume" element={<Resume/>} exact />
          <Route path="/contact" element={<Contact/>} exact />
          </Routes>
          <ParticleBackground></ParticleBackground>
        </Container>
        <Footer></Footer>
      </Router>

    );
  }
}

export default App;
