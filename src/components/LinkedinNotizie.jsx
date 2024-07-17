import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";

const LinkedinNotizie = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showFullArticole, setShowFullArticole] = useState(false);

  const toggleShowFullArticole = () => {
    setShowFullArticole(!showFullArticole);
  };

  const handleInfoclic = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Container className="mb-4">
      {showInfo && (
        <div className="modal show" style={{ display: "block", position: "initial" }}>
          <Modal.Dialog>
            <Modal.Body>
              <Button className="position-absolut top-150" aria-label="Chiudi" type="button">
                <li-icon aria-hidden="true" type="cancel-icon" size="small" class="cz-color-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match cz-color-0"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path
                      d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"
                      className="cz-color-0"
                    ></path>
                  </svg>
                </li-icon>
              </Button>
              <p>
                Queste sono le principali notizie e conversazioni del giorno.
                <span className="link-offset-2 link-underline link-underline-opacity-0">Scopri</span> come vengono
                selezionate.
              </p>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      )}
      <Row className="bg-white d-flex justify-content-between border border-dark-subtle rounded-3">
        <Col className="row ps-2 col-8 ms-2">
          <h5 className="mt-3 fs-4 fw-semibold">Linkedin Notizie</h5>
          <p className="fs-5 text-body-secondary">Storie Principali</p>
        </Col>
        <Col className="position-relative">
          <HiInformationCircle alt="info" className="infoIcon" onClick={handleInfoclic} />
        </Col>
        <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie">
          <p className="fontPersonale fs-5 m-0 fw-semibold">Semaforo giallo per il talento elettrico</p>
          <p className="fs-5 text-body-secondary">Notizie Principali</p>
        </Col>
        <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie">
          <p className="fontPersonale fs-5 m-0 fw-semibold ">Dal principio di scarsità al valore</p>
          <p className="fs-5 text-body-secondary">1 Giorno fa</p>
        </Col>
        <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie">
          <p className="fontPersonale fs-5 m-0 fw-semibold">Cambio al vertice di Telethon</p>
          <p className="fs-5 text-body-secondary">2 Giorno fa</p>
        </Col>
        <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
          <p className="fontPersonale fs-5 m-0 fw-semibold ">Dove Crescono e calano i salari</p>
          <p className="fs-5 text-body-secondary">16 ora fa</p>
        </Col>
        <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
          <p className="fontPersonale fs-5 m-0 fw-semibold">Due italiane al top nella matematica</p>
          <p className="fs-5 text-body-secondary">19 ore fa</p>
        </Col>
        {showFullArticole && (
          <>
            <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
              <p className="fontPersonale fs-5 m-0 fw-semibold">Fnac prova a prendersi Unieuro</p>
              <p className="fs-5 text-body-secondary">21 ore fa</p>
            </Col>
            <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
              <p className="fontPersonale fs-5 m-0 fw-semibold">Ora che l`AI Act è legge</p>
              <p className="fs-5 text-body-secondary">26 ore fa</p>
            </Col>
            <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
              <p className="fontPersonale fs-5 m-0 fw-semibold">Ferragamo crsce nel mondo dei vini</p>
              <p className="fs-5 text-body-secondary">1 giorno fa</p>
            </Col>
            <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
              <p className="fontPersonale fs-5 m-0 fw-semibold">Alla comunicazione servono processi chiari</p>
              <p className="fs-5 text-body-secondary">2 gorni fa</p>
            </Col>
          </>
        )}
        <Col className="col-12 ms-2">
          <Button className="btnVediAltro fs-5 text-dark" onClick={toggleShowFullArticole}>
            {showFullArticole ? (
              <>
                Meno dettagli <IoIosArrowUp className="iconArrow" />
              </>
            ) : (
              <>
                Vedi altro <IoIosArrowDown className="iconArrow" />
              </>
            )}
          </Button>
        </Col>
        <Row>
          <Col className="ms-2 mt-4 col-12 ">
            <h3 className="fs-5 fw-semibold text-body-secondary ">
              I giochi di oggi <span className=" fs-6 ms-3 bgBadge p-1 "> NOVITÀ </span>
            </h3>
          </Col>
          <Col className="d-flex m-2 gioghi">
            <img src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" alt="gioco" />
            <p className="d-inline mt-3 ms-2">
              <span className="fw-bold ">Queens</span> #78
              <small className="text-body-secondary d-block">Incorona ogni regione</small>
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="d-flex justify-content-between border border-dark-subtle rounded-3 mt-2">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          className="m-0 p-0"
        />
      </Row>
      <Row className="text-center mt-3">
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
          <span className="ms-2">LinkedIn Corporation © 2024 </span>
        </Col>
      </Row>
    </Container>
  );
};

export default LinkedinNotizie;
