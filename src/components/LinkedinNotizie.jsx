import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";
import FooterJobPage from "./FooterJobPage";

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
    <Container>
      <Row className="bg-white d-flex justify-content-between border border-dark-subtle rounded-3 position-relative">
        {showInfo && (
          <div className="modal show" style={{ display: "block", position: "absolute", top: -70, left: -70 }}>
            <Modal.Dialog className="position-absolute left-0 modalShow">
              <Modal.Body>
                <Button
                  className="position-absolute top-0 end-0 bg-transparent border-0"
                  aria-label="Chiudi"
                  type="button"
                  onClick={handleInfoclic}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="black"
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
                </Button>
                <p>
                  Queste sono le principali notizie e conversazioni del giorno.
                  <span className="scopriColor">Scopri</span> come vengono selezionate.
                </p>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        )}
        <Row className="col-8 ps-3 ">
          <Col className="d-flex ">
            <h6 style={{ fontSize: "18px", whiteSpace: "nowrap" }} className="mt-3 fw-semibold">
              Linkedin Notizie
              <span>
                <HiInformationCircle style={{ marginLeft: "120px" }} alt="info" onClick={handleInfoclic} />
              </span>
            </h6>
          </Col>
          <Col>
            <p style={{ color: "#A4A4A4", fontSize: "15px", whiteSpace: "nowrap" }} className="text-body-secondary">
              Storie Principali
            </p>
          </Col>
        </Row>

        <Col className=" ps-3 hooverElementLinkedinNotizie">
          <h6 style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="fw-semibold">
            Semaforo giallo per il talento elettrico
          </h6>
          <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
            11 ore fa · 637 lettori
          </p>
        </Col>
        <Col className="ps-3 hooverElementLinkedinNotizie">
          <h6 style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
            Dal principio di scarsità al valore
          </h6>
          <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
            8 giorni fa · 6.782 lettori
          </p>
        </Col>
        <Col className="ps-3 hooverElementLinkedinNotizie">
          <p style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
            Cambio al vertice di Telethon
          </p>
          <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
            13 ore fa · 4.145 lettori
          </p>
        </Col>
        <Col className=" ps-3 hooverElementLinkedinNotizie">
          <p style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
            Dove Crescono e calano i salari
          </p>
          <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
            1 giorno fa · 510 lettori
          </p>
        </Col>
        <Col className="ps-3 hooverElementLinkedinNotizie">
          <p style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
            Due italiane al top nella matematica
          </p>
          <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
            1 giorno fa · 331 lettori
          </p>
        </Col>
        {showFullArticole && (
          <>
            <Col className=" ps-3 hooverElementLinkedinNotizie">
              <p style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
                Fnac prova a prendersi Unieuro
              </p>
              <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
                21 ore fa · 500 lettori
              </p>
            </Col>
            <Col className="ps-3 hooverElementLinkedinNotizie">
              <p style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
                Ora che l`AI Act è legge
              </p>
              <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
                26 ore fa · 5.000 lettori
              </p>
            </Col>
            <Col className="ps-3 hooverElementLinkedinNotizie">
              <p style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
                Ferragamo cresce nel mondo dei vini
              </p>
              <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
                1 giorno fa · 862 lettori
              </p>
            </Col>
            <Col className="ps-3 hooverElementLinkedinNotizie">
              <p style={{ whiteSpace: "nowrap", fontSize: "14px" }} className="m-0 fw-semibold">
                Alla comunicazione servono processi chiari
              </p>
              <p style={{ color: "#A4A4A4", fontSize: "13px", whiteSpace: "nowrap" }} className="text-body-secondary">
                2 giorni fa · 2.000 lettori
              </p>
            </Col>
          </>
        )}
        <Col className="col-12 ms-1">
          <Button
            fill="black"
            style={{ height: "40px" }}
            className="btnNoFocus btnVediAltro text-dark"
            onClick={toggleShowFullArticole}
            onMouseDown={(e) => e.preventDefault()}
          >
            {showFullArticole ? (
              <p style={{ fontSize: "14px" }}>
                Meno dettagli <IoIosArrowUp className="iconArrow h-25" />
              </p>
            ) : (
              <p style={{ fontSize: "14px" }}>
                Vedi altro <IoIosArrowDown className="iconArrow" />
              </p>
            )}
          </Button>
        </Col>

        <Row>
          <Col className="ms-2 mt-4 col-12">
            <h6 className="fw-semibold text-body-secondary">
              I giochi di oggi <span className="ms-3 bgBadge p-1">NOVITÀ</span>
            </h6>
          </Col>
          <Col className="d-flex m-2 gioghi">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"
              alt="gioco"
              style={{ width: "50px" }}
            />
            <p className="d-inline mt-3 ms-2">
              <span style={{ fontSize: "15px" }} className="fw-bold text-secondary">
                Queens #78
              </span>
              <small className="text-body-secondary d-block">Incorona ogni regione</small>
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="mt-2">
        <Col className="text-center bg-white rounded m-0 p-0">
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            className="w-100 h-100 rounded "
            alt="adv"
          />
        </Col>
      </Row>
      <FooterJobPage />
    </Container>
  );
};

export default LinkedinNotizie;
