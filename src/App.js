import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/291978694_465978512197506_768194558146679677_n.jpg';

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
            <Button className="btn-light btn-lg btn-block btn-social btn-google" href="https://www.google.com/maps/place/Vito+Gallo+Parrucchieri/@37.5096354,13.0742367,17z/data=!4m8!3m7!1s0x131a47b25aec0b4f:0xcd4736033c716f1d!8m2!3d37.5096312!4d13.0768116!9m1!1b1!16s%2Fg%2F11h_wn_sw8?entry=ttu">
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
            <Button className="btn-dark btn-lg btn-block btn-social btn-tiktok" href="https://www.tiktok.com/place/Parrucchiere-Vito-Gallo-21568295496296882">
              <FontAwesomeIcon icon={faTiktok} className="me-2" /> TikTok
            </Button>
          </Col>
        </Row>

        {/* <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-3 text-center">
            <Button className="btn-outline-light btn-lg btn-block btn-social disabled" href="#">
              <h2 className="mb-0">Sito web</h2>
              <span className="small">(coming soon)</span>
            </Button>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
