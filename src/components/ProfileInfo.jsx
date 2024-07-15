import { Col, Container, Row } from "react-bootstrap";
import { LiaPenSolid } from "react-icons/lia";

const ProfileInfo = () => {
  return (
    <Container xs="4" md="4" className="col-12 mb-4 mt-5">
      <Row className="d-flex justify-content-between border border-dark-subtle rounded-3">
        <Col className="row ps-2 col-8">
          <span className="fs-5">Lingua del profilo </span>
          <p className="fw-lighter">Italiano</p>
        </Col>
        <Col className="text-end ">
          <LiaPenSolid className="svgSize" />
        </Col>
        <hr className="hrPrfileInfo text-center ms-3 mb-2" />
        <Col className="row ps-2 col-8">
          <span className="fs-5">Profilo pubblico e URL </span>
          <p className="fw-lighter">
            www.linkedin.com/in/todor-petrov-6ab7482b7
          </p>
        </Col>
        <Col className="text-end ">
          <LiaPenSolid className="svgSize" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-between border border-dark-subtle rounded-3 mt-2">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          className="m-0 p-0"
        />
      </Row>
      <Row className="d-flex justify-content-between border border-dark-subtle rounded-3 mt-2">
        <Col xs="12">
          <p className="fs-6">Persone che potresti conoscere</p>
        </Col>
        <Col>
          <ul>
            <li></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
