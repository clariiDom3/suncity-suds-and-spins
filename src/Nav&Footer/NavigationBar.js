import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


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

    function handleClicked(){

    }


    return (
    
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Suncity Suds & Spins</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#87ceeb' }} href="#home">Home</Nav.Link>
                        <NavDropdown title="Services" id="service-nav-dropdown">
                            {services.map(service => (
                                <NavDropdown.Item key={service.id} href={'#${service.id}'}>{service.name}</NavDropdown.Item>
                            ))}
                            
                        </NavDropdown>
                        <NavDropdown title="Prices" id="price-nav-dropdown">
                            {pricing.map(price => (
                                <NavDropdown.Item key={price.id} href={'#${price.id}'}>{price.name}</NavDropdown.Item>
                                
                            ))}
                            
                        </NavDropdown>
                        <Nav.Link style={{ color: '#87ceeb' }} href="#link">About us</Nav.Link>
                        <Nav.Link style={{ color: '#87ceeb' }}  href="#link">Careers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
};
export default NavigationBar;