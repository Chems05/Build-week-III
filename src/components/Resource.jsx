import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaEye } from "react-icons/fa";

import { ArrowRight } from "react-bootstrap-icons";

const Resource = () => {
  return (
    <Container className=" bg-white border border-dark-subtle rounded-3 text-dark p-3 pb-0 mt-5">
      <Row className="">
        <Col md={12}>
          <h5 className="fw-bold mt-2"> Risorse </h5>
          <h6 className="text-secondary d-flex align-items-center">
            <FaEye className="me-1" />
            Solo per te
          </h6>
          <br />
        </Col>
        <Col md={12}>
        <span> <h6 className="fw-bold d-flex align-items-center">
            {" "}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#404040"
                className="mercado-match me-1"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg> La mia rete
          </h6>
          <p  style={{fontSize:'14px' ,marginLeft:'27px'}}>Salva e gestisci i tuoi componenti</p></span> 
          <hr />
         <span>  <h6 className="fw-bold d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#404040"
          className="me-1"
        >
          <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
        </svg>
        La mia rete
      </h6>
          <p style={{fontSize:'14px' ,marginLeft:'27px'}}>Monitore le tue offerte di lavoro, i corsi e gli articoli</p></span> 
        </Col>
        <hr className="mb-0" />
        <div style={{ cursor: "pointer" }} className="d-flex align-items-center justify-content-center p-2">
          <span  style={{ color: "grey",
                      fontSize: "15px",}} className="me-2 text-secondary">Mostra Tutte le analisi</span>
          <ArrowRight />
        </div>
      </Row>
    </Container>
  );
};

export default Resource;
