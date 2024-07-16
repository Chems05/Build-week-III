import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaEye, FaUserFriends } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { ArrowRight } from "react-bootstrap-icons";

const Resource = () => {
  return (
    <Container className=" bg-white border border-dark-subtle rounded-3 text-dark p-3 pb-0 mt-5">
      <Row className="">
        <Col md={12}>
          <h4> Risorse </h4>
          <h6 className="text-secondary">
            <FaEye className="me-1" />
            solo per te
          </h6>
          <br />
        </Col>
        <Col md={12}>
          <h5>
            {" "}
            <FaUserFriends /> La mia rete
          </h5>
          <p>salva e gestisci i tuoi componenti</p>
          <hr />
          <h5>
            <MdOutlineFavorite />
            Elementi salvati
          </h5>
          <p>Monitore le tue offerte di lavoro, i corsi e gli articoli</p>
        </Col>
        <hr className="mb-0" />
        <div style={{ cursor: "pointer" }} className="d-flex align-items-center justify-content-center p-2">
          <span className="me-2 text-secondary">Mostra Tutte le analisi</span>
          <ArrowRight />
        </div>
      </Row>
    </Container>
  );
};

export default Resource;
