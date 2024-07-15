import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={2}>
            <h6>Informazioni</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Linee guida della community
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Privacy e condizioni
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Centro sicurezza
                </a>
              </li>
            </ul>
            <p>LinkedIn Corporation © 2024</p>
          </Col>
          <Col md={2}>
            <h6>Accessibilità</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Carriera
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Talent Solutions</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Soluzioni di marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Pubblicità
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Piccole imprese
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Domande?</h6>
            <p>Visita il nostro Centro assistenza.</p>
            <h6>Gestisci il tuo account e la tua privacy</h6>
            <p>Vai alle impostazioni</p>
            <h6>Trasparenza sui contenuti consigliati</h6>
            <p>Scopri di più sui contenuti consigliati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
