import React from 'react'
import {Container, Col, Row, Tab, Tabs} from 'react-bootstrap'
import WelcomeImage from '../Images/sunset.jpg';

export default function Home() {
  return (
    <div className='App-header'>
      <div className="mb-5">

      
        <h2>Welcome to Suncity Suds & Spins!</h2>
        <p>Your one-stop solution for all your laundry needs.</p>
        <a href="#services" className="btn btn-primary">Discover Our Services</a>
      </div>  

        <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
      <Container>  
      <Row >
      <Col md={6}>
        
      </Col>
      <Col md={6}>
        <img
          src={WelcomeImage}
          alt="Laundry Services"
          className="img-fluid"
        />
      </Col>
    </Row>
        
      </Container>
      <div class="hero-banner">
    <div class="hero-text">
        
        <a href="#services" class="btn btn-primary">Explore Our Services</a>
    </div>
</div>
<section class="welcome-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>Welcome to Suncity Suds & Spins!</h2>
                <p>Your one-stop solution for all your laundry needs.</p>
                <a href="#services" class="btn btn-primary">Discover Our Services</a>
            </div>
            <div class="col-md-6">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FWelcome-Banner-Burlap-Classroom-Decorations%2Fdp%2FB07F9MT3Q1&psig=AOvVaw371GHZx6SRH-Q3tPFP_4dT&ust=1710408311183000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDBntD18IQDFQAAAAAdAAAAABAE" alt="Laundry Services" class="img-fluid"/>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}
