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
    <Container className="mb-4 ">
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
        <Row className="row ps-2 col-8 ms-1">
        <h6 style={{ fontSize: '18px', whiteSpace: 'nowrap' }} className="mt-3 fw-semibold">
  <span>    Linkedin Notizie   <HiInformationCircle style={{marginLeft:'85px'}} alt="info" onClick={handleInfoclic} />
  </span>   
    </h6>
  
        </Row>
    
          <HiInformationCircle alt="info" className="infoIcon" onClick={handleInfoclic} />
       
        <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
        <p style={{ color: '#A4A4A4', fontSize: '15px', whiteSpace: 'nowrap' }} className=" text-body-secondary">
      Storie Principali
    </p>
    <h6 style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="fw-semibold">
      Semaforo giallo per il talento elettrico
    </h6>
    <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
      11 ore fa·637 lettori
    </p>
  </Row>
  <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
    <h6 style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
      Dal principio di scarsità al valore
    </h6>
    <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
      8 giorni fa·6.782 lettori
    </p>
  </Row>
  <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
    <p style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
      Cambio al vertice di Telethon
    </p>
    <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
      13 ore fa·4.145 lettori
    </p>
  </Row>
  <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
    <p style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
      Dove Crescono e calano i salari
    </p>
    <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
      1 giorno fa·510 lettori
    </p>
  </Row>
  <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
    <p style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
      Due italiane al top nella matematica
    </p>
    <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
      1 giorno fa·331 lettori
    </p>
  </Row>
        {showFullArticole && (
          <>
             <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
        <p style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
          Fnac prova a prendersi Unieuro
        </p>
        <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
          21 ore fa·500 lettori
        </p>
      </Row>
      <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
        <p style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
          Ora che l`AI Act è legge
        </p>
        <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
          26 ore fa·5.000 lettori
        </p>
      </Row>
      <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
        <p style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
          Ferragamo crsce nel mondo dei vini
        </p>
        <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
          1 giorno fa·862 lettori
        </p>
      </Row>
      <Row className="row ps-2 col-8 ms-1 hooverElementLinkedinNotizie">
        <p style={{ whiteSpace: 'nowrap',fontSize:'14px' }} className="m-0 fw-semibold">
          Alla comunicazione servono processi <br /> chiari
        </p>
        <p style={{ color: '#A4A4A4', fontSize: '13px', whiteSpace: 'nowrap' }} className="text-body-secondary">
          2 gorni fa·2.000 lettori
        </p>
      </Row>
          </>
        )}
        <Col className="col-12 ms-1">
          <Button style={{height:'40px'}} className="btnVediAltro text-dark" onClick={toggleShowFullArticole}>
            {showFullArticole ? (
              <>
             <p style={{fontSize:'14px'}}>   Meno dettagli <IoIosArrowUp className="iconArrow" />  </p> 
              </>
            ) : (
              <>
                 <p style={{fontSize:'14px'}}>   Vedi altro <IoIosArrowDown  className="iconArrow" /> </p>
              </>
            )}
          </Button>
        </Col>
        <Row>
          <Col className="ms-2 mt-4 col-12 ">
            <h6 className=" fw-semibold text-body-secondary ">
              I giochi di oggi <span className="  ms-3 bgBadge p-1 "> NOVITÀ </span>
            </h6>
          </Col>
          <Col className="d-flex m-2 gioghi">
            <img src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" alt="gioco" />
            <p className="d-inline mt-3 ms-2">
              <span style={{fontSize:'15px'}} className="fw-bold text-secondary ">Queens #78 </span>
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
      <Row style={{fontSize:'13px'}} className="text-center mt-3">
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
          <span style={{fontSize:'14px'}} className="ms-2">LinkedIn Corporation © 2024 </span>
        </Col>
      </Row>
    </Container>
  );
};

export default LinkedinNotizie;
