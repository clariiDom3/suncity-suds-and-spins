import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../Pages/Home.js';
import About from '../Pages/WashAndFold.js';
import Careers from '../Pages/Careers.js';




const services = [
    {
    id: 0,
    name: "option 1"
    },
    {
        id: 1,
        name: "Dry cleaning"
    },
    {
        id: 2,
        name: "Wash and hold"
    },
];
const pricing = [
    {
        id: 0,
        name: "Wash, Dry, Fold"
    },
    {
        id: 1,
        name: "Same Day Wash, Dry"
    },
    {
        id: 2,
        name: "Individually Priced Items"
    },
    {
        id: 3,
        name: "Dry Cleaning Prices"
    },
]

let NavigationBar = () => {
    return (
        <Router>

            <Navbar expand="lg" className="bg-body-tertiary">

                <Navbar.Brand href="#home">Suncity Suds & Spins</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"} style={{ color: '#87ceeb' }}>Home</Nav.Link>
                        <NavDropdown title="Services" id="service-nav-dropdown" className='.custom-color-light-blue'>

                            {services.map((service, index) => (
                                <React.Fragment key={service.id}>
                                    <NavDropdown.Item href={'#${service.id}'}>{service.name}</NavDropdown.Item>
                                    {index < services.length - 1 && <NavDropdown.Divider />}
                                </React.Fragment>
                            ))}
                        </NavDropdown>
                        <NavDropdown title="Prices" id="price-nav-dropdown">
                            {pricing.map((price, index) => (
                                <React.Fragment key={price.id}>
                                    <NavDropdown.Item href={'#${price.id}'}>{price.name}</NavDropdown.Item>
                                    {index < pricing.length - 1 && <NavDropdown.Divider />}
                                </React.Fragment>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/about"} style={{ color: '#87ceeb' }}>About us</Nav.Link>
                        <Nav.Link as={Link} to={"/careers"} style={{ color: '#87ceeb' }}>Careers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />   
            </Routes>
           </> 
        </Router>
        
  )
};
export default NavigationBar;