import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaEye, FaUserFriends, FaPen } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Resource = () => {
  return (
    <Container className="border border-dark-subtle rounded-3 text-dark p-4 mt-5">
      <Row className="mb-3">
        <Col md={8}>
          <h4>Attività</h4>
          <h6>
            <FaEye />
            solo per te
          </h6>
          <br />
        </Col>
        <Col md={4} className="text-end">
          <Button variant="outline-primary" size="sm">
            Crea un post <FaPen />
          </Button>
        </Col>
        <Col md={4}>
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
        <hr />
        <div className="text-center">
          <Link to="*">Mostra tutti i post (4)</Link>
        </div>
      </Row>
    </Container>
  );
};

export default Resource;
