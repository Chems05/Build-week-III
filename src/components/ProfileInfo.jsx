import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { LiaPenSolid } from "react-icons/lia";
import { BsFillPersonPlusFill } from "react-icons/bs";

const ProfileInfo = () => {
  return (
    <Container xs="4" md="4" className="bg-white mb-4">
      <Row className=" bg-white d-flex justify-content-between border border-dark-subtle rounded-3">
        <Col className="row ps-2 col-8">
          <span className="fs-5">Lingua del profilo </span>
          <p className="fw-lighter">Italiano</p>
        </Col>
        <Col className="text-end ">
          <LiaPenSolid className="svgSize" />
        </Col>
        <Col className="row ps-2 col-8">
          <hr className="hrPrfileInfo text-center ms-3 mb-2" />
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
      <Row className="d-flex  border border-dark-subtle rounded-3 mt-2">
        <Col xs="12">
          <p className="fs-6 text-center">
            <strong>Persone che potresti conoscere</strong>
          </p>
        </Col>
        <Col>
          <ListGroup>
            <ListGroupItem className="border border-0">
              <Row className="">
                <Col>
                  <img
                    className="rounded-circle imgProfileInfo"
                    src="https://media.licdn.com/dms/image/D5603AQHtmaSyfliXzQ/profile-displayphoto-shrink_100_100/0/1714389091023?e=1726704000&v=beta&t=Lx7IPkUanWzlX-2b967cjx1P-6DrU043cbBzdO-lzPY"
                    alt=""
                  />
                </Col>
                <Col className="d-flex row">
                  <Col className="col-12">
                    <p>Veronica Gerani</p>
                  </Col>
                  <Button className="btnPeaples p-3 mb-2 bg-transparent text-body d-flex align-items-center">
                    <BsFillPersonPlusFill />
                    <strong>Collegati</strong>
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
