import { Button, Col, Container, Row } from "react-bootstrap";
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
        <Row className="position-absolute ">
          <Col>
            Queste sono le principali notizie e conversazioni del giorno.
            <span className="link-offset-2 link-underline link-underline-opacity-0">Scopri</span> come vengono
            selezionate.
          </Col>
        </Row>
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
              <p className="fs-5 text-body-secondary">19 ore fa</p>
            </Col>
            <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
              <p className="fontPersonale fs-5 m-0 fw-semibold">Due italiane al top nella matematica</p>
              <p className="fs-5 text-body-secondary">19 ore fa</p>
            </Col>
            <Col className="row ps-2 col-8 ms-2 hooverElementLinkedinNotizie ">
              <p className="fontPersonale fs-5 m-0 fw-semibold">Due italiane al top nella matematica</p>
              <p className="fs-5 text-body-secondary">19 ore fa</p>
            </Col>
          </>
        )}
        <Col className="col-12">
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
      </Row>
      <Row className="d-flex justify-content-between border border-dark-subtle rounded-3 mt-2">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          className="m-0 p-0"
        />
      </Row>
      <Row className="bg-white d-flex border border-dark-subtle rounded-3 mt-2">
        <Col xs="12">
          <p className="fs-6 mt-3 ">
            <strong>Persone che potresti conoscere</strong>
            <br />
            <small className="text-muted">Dalla tua azienda</small>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LinkedinNotizie;
