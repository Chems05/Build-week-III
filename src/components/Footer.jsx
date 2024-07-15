import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdSettings } from "react-icons/io";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoShieldHalf } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="text-black  mt-5 p-4">
      <Container>
        <Row>
          <Col md={2} className="d-none d-md-block">
            <h6>Informazioni</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-black">
                  Linee guida della community
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Privacy e condizioni
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Centro sicurezza
                </a>
              </li>
            </ul>
            <p>LinkedIn Corporation © 2024</p>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <h6>Accessibilità</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-black">
                  Carriera
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <h6>Talent Solutions</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-black">
                  Soluzioni di marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Pubblicità
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Piccole imprese
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>
              {" "}
              <HiQuestionMarkCircle /> Domande?
            </h5>
            <p>Visita il nostro Centro assistenza.</p>
            <h5>
              {" "}
              <IoMdSettings /> Gestisci il tuo account e la tua privacy
            </h5>
            <p>Vai alle impostazioni</p>
            <h5>
              {" "}
              <IoShieldHalf />
              Trasparenza sui contenuti consigliati
            </h5>
            <p>Scopri di più sui contenuti consigliati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
