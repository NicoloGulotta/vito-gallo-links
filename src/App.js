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
            <Button className="btn-light btn-lg btn-block btn-social btn-google" href="">
              <FontAwesomeIcon icon={faGoogle} className="me-2" /> Google
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="display-4 fw-bold">Seguici sui social</h1>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-primary btn-lg btn-block btn-social btn-facebook" href="https://www.facebook.com/share/1AtWhhi6YS/">
              <FontAwesomeIcon icon={faFacebookF} className="me-2" /> Facebook
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-danger btn-lg btn-block btn-social btn-social btn-instagram" href="https://www.instagram.com/marco_sw_24/profilecard/?igsh=MWVxa3h6NWF4aHhmcg==">
              <FontAwesomeIcon icon={faInstagram} className="me-2" /> Instagram personale
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-danger btn-lg btn-block btn-social btn-social btn-instagram" href="https://www.instagram.com/mc.calisthenics?igsh=enZhbmN3aTk2dmlj">
              <FontAwesomeIcon icon={faInstagram} className="me-2" /> Instagram
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-dark btn-lg btn-block btn-social btn-tiktok" href="">
              <FontAwesomeIcon icon={faTiktok} className="me-2" /> TikTok
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-success btn-lg btn-block btn-social btn-whatsapp" href="https://wa.me/qr/WM5AUQOJLFLMO1">
              <FontAwesomeIcon icon={faTiktok} className="me-2" /> Whatsapp
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-outline-light btn-lg btn-block btn-social disabled" href="#">
              <h2 className="mb-0">App web</h2>
              <span className="small">(coming soon)</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
