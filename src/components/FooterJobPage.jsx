import { Col, Container, Row } from "react-bootstrap";

const FooterJobPage = () => {
  return (
    <Container>
      <Row style={{ fontSize: "13px" }} className="text-center mt-3">
        <Col md="12 mb-2">
          <span className="footerText">Informazioni</span> <span className="ms-3 footerText">Accessibilità</span>
        </Col>
        <Col md="12 mb-2">
          <span className="footerText">Centro assistenza</span>
        </Col>
        <Col md="12 mb-2">
          <span className="footerText">Privacy e condizioni </span>
        </Col>
        <Col md="12 mb-2">
          <span className="footerText">Opzioni per gli annunci pubblicitari </span>
        </Col>
        <Col md="12 mb-2">
          <span className="footerText">Pubblicià</span> <span className="ms-3 footerText">Servizi alle aziende</span>
        </Col>
        <Col md="12 mb-2">
          <span className="footerText">Scarica l`app Linkedin</span> <span className="ms-3 footerText">Altro</span>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <img
            src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
            alt="nomeAzienda"
            className="imgLinkedin"
          />
          <span style={{ fontSize: "14px" }} className="ms-2">
            LinkedIn Corporation © 2024{" "}
          </span>
        </Col>
      </Row>
    </Container>
  );
};
export default FooterJobPage;
