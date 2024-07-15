import { Card, Col,  Row, Button } from "react-bootstrap";
import { useState } from "react";
import { Pencil } from "react-bootstrap-icons";

const Informazioni = () => {
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
                  <Card.Title style={{ fontWeight: " bold" }} className="mb-3">
                    Informazioni
                  </Card.Title>
                </Col>
                <Col
                  xs={2}
                  className="d-flex justify-content-end align-items-center"
                >
                  <Pencil
                    style={{ cursor: "pointer" }}
                    className="mb-3"
                    fill="currentColor"
                  />
                </Col>
              </Row>
              <Card.Text style={{ fontSize: "15px" }}>
                {showFullText ? (
                  <>
                    Sono un Full Stack Developer con esperienza pluriennale
                    nello sviluppo di applicazioni web.
                    <br />
                    Ho competenze approfondite sia sul lato front-end che sul
                    lato back-end, utilizzando tecnologie moderne come React per
                    il front-end e Node.js per il back-end.
                    <br />
                    Ho una forte padronanza di HTML, CSS e JavaScript, con una
                    particolare attenzione alla creazione di interfacce utente
                    intuitive e responsive.
                    <br />
                    Nel corso della mia carriera, ho lavorato su progetti
                    complessi che hanno richiesto la gestione efficace del
                    database, usando database relazionali come MySQL e
                    PostgreSQL.
                    <br />
                    Ho anche esperienza con NoSQL databases come MongoDB per
                    applicazioni che richiedono scalabilità e flessibilità nella
                    gestione dei dati.
                    <br />
                    Oltre allo sviluppo di applicazioni, sono esperto nell
                    implementazione di API RESTful e nell integrazione di
                    servizi di terze parti.
                    <br />
                    Ho lavorato in team agili utilizzando metodologie come
                    Scrum, garantendo una comunicazione chiara e una consegna
                    tempestiva dei progetti.
                    <br />
                    Sono appassionato di continuo apprendimento e mi tengo
                    aggiornato sulle ultime tecnologie e tendenze nel settore
                    dello sviluppo software.
                    <br />
                    Sono pronto a contribuire con le mie competenze e la mia
                    creatività a progetti stimolanti e innovativi.{" "}
                    <Button
                      variant="link"
                      style={{
                        textDecoration: "none",
                        color: "grey",
                        fontSize: "15px",
                      }}
                      onClick={toggleShowFullText}
                    >
                      mostra meno
                    </Button>
                  </>
                ) : (
                  <>
                    Sono un Full Stack Developer con esperienza pluriennale
                    nello sviluppo di applicazioni web.
                    <br />
                    Ho competenze approfondite sia sul lato front-end che sul
                    lato back-end, utilizzando tecnologie moderne come React per
                    il front-end e Node.js per il back-end.
                    <br />
                    Ho una forte padronanza di HTML, CSS e JavaScript, con una
                    particolare attenzione alla creazione di interfacce utente
                    intuitive e responsive...
                    <Button
                      variant="link"
                      style={{
                        textDecoration: "none",
                        color: "grey",
                        fontSize: "15px",
                      }}
                      onClick={toggleShowFullText}
                    >
                      vedi altro
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

export default Informazioni;
