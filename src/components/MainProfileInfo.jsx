import { Card, Container, Image } from "react-bootstrap";
import { CameraFill, Pencil, ShieldCheck } from "react-bootstrap-icons";

const MainProfileInfo = () => {
  return (
    <Container className="mt-5">
      <Card>
        <div className="position-relative">
          <Card.Img
            variant="top"
            src="https://media.licdn.com/dms/image/C4E16AQF8TC4KCgMDNA/profile-displaybackgroundimage-shrink_350_1400/0/1523715805906?e=1726704000&v=beta&t=wGs6DFrGhY_bDMVESIcstUxHmOmzNXgZTlG5gqy9Jn4"
          />
          <Image
            className="border border-white border-4"
            src="src\assets\Screenshot 2024-07-06 190203.png"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-50px",
              left: "20px",
            }}
          />

          <div
            className="p-3 d-flex justify-content-center align-items-center"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
          >
            <CameraFill className="z-1 position-absolute light-blue" />
          </div>
        </div>

        <Pencil
          style={{ cursor: "pointer" }}
          className="ms-auto me-4 mt-3"
          fill="currentColor"
        />
        <Card.Body className="mt-3 ms-2">
          <Card.Title className="d-inline-block">Nome Cognome</Card.Title>

          <div className="dashed-border-button d-inline-flex align-items-center rounded-pill ms-3">
            <ShieldCheck className="me-1" fill="currentColor" /> Verifica ora
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Card.Text className="lead d-inline-block">
            Citta, Regione, Nazione
          </Card.Text>
          <span className="light-blue ms-3">informazioni di contatto</span>
          <Card.Text className="light-blue">X collegamenti</Card.Text>
          <div className="blue-button d-inline-block rounded-pill ">
            Disponibile per
          </div>
          <div className="light-blue-button d-inline-block rounded-pill ms-2">
            Aggiungi sezione del profilo
          </div>
          <div className="light-blue-button d-inline-block rounded-pill ms-2">
            Migliora profilo
          </div>
          <div className="black-button d-inline-block rounded-pill ms-2">
            Altro
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MainProfileInfo;
