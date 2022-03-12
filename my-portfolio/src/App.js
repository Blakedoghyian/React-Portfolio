import './App.css';
import Hero from './components/Hero';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Footer from './components/Footer';
import Particles from 'react-tsparticles';
import ParticleBackground from './components/particleBackground';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Blake Doghyian',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'My React Portfolio',
        subTitle: 'My journey to full stack',
        text: 'Aspiring developer'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Reach Out'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className='border-bottom' bg="transparent" expand="lg">
            <Navbar.Brand>Blake Doghyian</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <ParticleBackground></ParticleBackground>
        <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
