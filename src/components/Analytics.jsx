import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const Analytics = () => {
  return (
    <Container className="bg-white border rounded mt-3 p-3 pb-0">
      <h5 className="fw-bold">Analisi</h5>

      <div className="d-flex align-items-center mb-2 text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="#404040"
          className="mercado-match"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
        </svg>
        <span className="ms-1">Solo per te</span>
      </div>

      <Row>
        <Col md={4}>
          <Row>
            <Col className="me-3" xs={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#404040"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
            </Col>

            <Col xs={10}>
              <a>
                <strong className="d-inline-block">100 Visualizzazioni del profilo</strong>
                <span style={{fontSize:'14px'}}>Scopri chi ha visualizzato il tuo profilo</span>
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col className="me-3" xs={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#404040"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
              </svg>
            </Col>

            <Col xs={10}>
              <a>
                <strong className="d-inline-block ">500 Impressioni del post</strong>
                <span style={{fontSize:'14px'}} >Scopri chi sta interagendo con il tuo post
                  <br />
                 <h6 style={{fontSize:'13px',color:'grey',marginTop:'5px'}}> Ultimi 7 giorni </h6>
                </span>
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col className="me-3" xs={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
              </svg>
            </Col>

            <Col xs={10}>
              <a>
                <strong className="d-inline-block">35 Comparse nei motori di ricerca</strong>
                <span style={{fontSize:'14px'}}>Vedi quante volte compari nei risultati di ricerca</span>
              </a>
            </Col>
          </Row>
        </Col>
        <hr className="mb-0" />
        <div style={{ cursor: "pointer" }} className="d-flex align-items-center justify-content-center p-2">
          <span style={{ color: "grey",
                      fontSize: "15px",}} className="me-2 text-secondary">Mostra Tutte le analisi</span>
          <ArrowRight />
        </div>
      </Row>
    </Container>
  );
};

export default Analytics;
