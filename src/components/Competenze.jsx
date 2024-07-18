import { Card, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { ArrowRight, Pencil } from "react-bootstrap-icons";
import { BsPlusLg } from "react-icons/bs";
import "../assets/competenze.css";

const Competenze = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Row className="mt-4">
      <Col>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <h4 className="mb-4">
                  Competenze
                </h4>
              </Col>
              <Col
                xs={2}
                className="d-flex justify-content-end align-items-center"
              >
                <span>
                  <BsPlusLg
                    style={{ cursor: "pointer" }}
                    className="mb-3 me-3"
                    fill="currentColor"
                  />
                  <Pencil
                    style={{ cursor: "pointer" }}
                    className="mb-3"
                    fill="currentColor"
                  />
                </span>
              </Col>
            </Row>
            <Card.Text style={{ fontSize: "15px" }}>
              {showFullText ? (
                <>
                  <a href="#" className="competence-link">
                    Full Stack Developer
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Esperto in React.js e Node.js
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Sviluppo di interfacce utente intuitive
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Gestione efficace di database relazionali (MySQL,
                    PostgreSQL)
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Conoscenza di database NoSQL come MongoDB
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Implementazione di API RESTful
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Lavoro in team agili con metodologie come Scrum
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Apprendimento continuo delle ultime tecnologie nel settore
                    dello sviluppo software
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Contributo a progetti innovativi e stimolanti
                  </a>{" "}
                  <Button
                    className="center-back"
                    variant="link"
                    style={{
                      textDecoration: "none",
                      color: "grey",
                      fontSize: "15px",
                    }}
                    onClick={toggleShowFullText}
                  >
                    Mostra meno
                  </Button>
                </>
              ) : (
                <>
                  <a href="#" className="competence-link">
                    Capacità di problem solving
                  </a>
                  <hr />
                  <a href="#" className="competence-link">
                    Conoscenza di strumenti di controllo di versione come Git
                  </a>
                  <hr />
                  <Button
                    variant="link"
                    className="center"
                    style={{
                      textDecoration: "none",
                      color: "grey",
                      fontSize: "15px",
                    }}
                    onClick={toggleShowFullText}
                  >
                    Mostra tutte le competenze (11){" "}
                    <ArrowRight className="ms-1" />
                  </Button>
                </>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Competenze;
