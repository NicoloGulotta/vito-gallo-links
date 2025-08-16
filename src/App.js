import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="bg-black text-white d-flex flex-column align-items-center min-vh-100"> {/* Utilizzo di Flexbox */}
      <div className="hero text-center mb-4">
        <img src={logo} alt="LOGO" className="img-fluid" />
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="display-4 fw-bold">Lascia una recensione</h1>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-light btn-lg btn-block btn-social btn-google" href="https://www.google.com/search?sca_esv=002beddf92056f26&rlz=1C1MKZV_itIT1080IT1080&sxsrf=AE3TifOw-KSEj-c4GO9_iufZOYTWXqsY8Q:1755364947331&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E30ppElSEEfQCFYjdCYlLEPWhKmyWC4zg75FGInbPiaB6kIBhYSPBW3ti2tHIf_JMhpoCSFnp9p80RTnJjrXfCC5dwzV3NzrEVwuMShIGHTrRUFc6g%3D%3D&q=Vito+Gallo+Parrucchieri+Recensioni&sa=X&ved=2ahUKEwiL8ouB7I-PAxXxhP0HHXyaOTwQ0bkNegQINhAD&biw=1360&bih=599&dpr=1">
              <FontAwesomeIcon icon={faGoogle} className="me-2" /> Google
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="display-4 fw-bold">Seguici sui social</h1>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-primary btn-lg btn-block btn-social btn-facebook" href="https://www.facebook.com/VGparrucchiere/?locale=it_IT">
              <FontAwesomeIcon icon={faFacebookF} className="me-2" /> Facebook
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-danger btn-lg btn-block btn-social btn-social btn-instagram" href="https://www.instagram.com/vitogalloparrucchieri/">
              <FontAwesomeIcon icon={faInstagram} className="me-2" /> Instagram
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-dark btn-lg btn-block btn-social btn-tiktok" href="https://www.tiktok.com/place/Parrucchiere-Vito-Gallo-21568295496296882?lang=en">
              <FontAwesomeIcon icon={faTiktok} className="me-2" /> TikTok
            </Button>
          </Col>
        </Row>

        {/* <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-outline-light btn-lg btn-block btn-social disabled" href="#">
              <h2 className="mb-0">App web</h2>
              <span className="small">(coming soon)</span>
            </Button>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
