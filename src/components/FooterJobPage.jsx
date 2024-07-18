import { Col, Container, Dropdown, DropdownDivider, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const FooterJobPage = () => {
  return (
    <Container>
      <Row style={{ fontSize: "13px" }} className="text-center mt-3 d-flex justify-content-center">
        <Col md="6" className="mb-2 footerText text-end">
          Informazioni
        </Col>
        <Col md="6" className="mb-2 footerText text-start">
          Accessibilità
        </Col>
        <Col md="6" className="mb-2 footerText">
          Centro assistenza
        </Col>
        <Col md="12" className="mb-2">
          <span className="footerText">
            <Dropdown className="w-auto h-auto">
              <Dropdown.Toggle variant="" className="footerText border-0">
                Privacy e condizioni
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100 h-auto">
                <Dropdown.Item href="#/action-1">Informativa sulla privacy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Contratto di licenza</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Termini e condizioni delle pagine</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Informativa sui cookie </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Informativa sul copyright</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </Col>
        <Col md="12" className="mb-2">
          <span className="footerText">Opzioni per gli annunci pubblicitari </span>
        </Col>
        <Col className=" col-12 mb-2 d-flex justify-content-center">
          <span className="footerText ">Pubblicià</span>
          <span className="footerText ">
            <Dropdown>
              <Dropdown.Toggle variant="" className="footerText border-0 pt-0">
                Servizi alle aziende
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-auto h-auto">
                <Dropdown.Item href="#/action-1" className="dropDownItems">
                  <strong>
                    Assumi su LinkedIn <br />
                    <span className="fw-lighter" style={{ color: "#A4A4A4", fontSize: "15px", whiteSpace: "nowrap" }}>
                      Trova, atrai e assumi
                    </span>
                  </strong>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="dropDownItems">
                  <strong>
                    Vendi su LinkedIn <br />
                    <span className="fw-lighter" style={{ color: "#A4A4A4", fontSize: "15px", whiteSpace: "wrap" }}>
                      Sblocca nuove oppurtunita di vendita
                    </span>
                  </strong>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="dropDownItems">
                  <strong>
                    Offerta di lavoro gratuita <br />
                    <span className="fw-lighter" style={{ color: "#A4A4A4", fontSize: "15px", whiteSpace: "wrap" }}>
                      Ottieni rpidamente candidati qualificati
                    </span>
                  </strong>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="dropDownItems">
                  <strong>
                    Fai pubblicità su LinkedIn <br />
                    <span className="fw-lighter" style={{ color: "#A4A4A4", fontSize: "15px", whiteSpace: "wrap" }}>
                      Acquisisci clienti e fai crescere la tua azienda
                    </span>
                  </strong>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="dropDownItems">
                  <strong>
                    Impara con LinkedIn
                    <br />
                    <span className="fw-lighter" style={{ color: "#A4A4A4", fontSize: "15px", whiteSpace: "wrap" }}>
                      Assumi su LinkedIn
                    </span>
                  </strong>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="dropDownItems">
                  <strong>
                    Admin Center
                    <br />
                    <span className="fw-lighter" style={{ color: "#A4A4A4", fontSize: "15px", whiteSpace: "wrap" }}>
                      Gestisci i dettagli di fatturazione e account
                    </span>
                  </strong>
                </Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Item href="#/action-3" className="dropDownItems">
                  <strong className="d-flex align-items-center">
                    Crea una pagina aziendale <FaPlus className="ms-1" />
                  </strong>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </Col>
        <Col md="12" className="mb-2">
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
            LinkedIn Corporation © 2024
          </span>
        </Col>
      </Row>
    </Container>
  );
};
export default FooterJobPage;
