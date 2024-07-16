import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { LiaPenSolid } from "react-icons/lia";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const allUsersArray = useSelector((state) => state.users.users);
  return (
    <Container xs="4" md="4" className=" mb-4">
      <Row className=" bg-white d-flex justify-content-between border border-dark-subtle rounded-3">
        <Col className="row ps-2 col-8">
          <span className="fs-5">
            <strong>Lingua del profilo</strong>
          </span>
          <p className="fw-lighter text-secondary">Italiano</p>
        </Col>
        <Col className="text-end ">
          <LiaPenSolid className="svgSize" />
        </Col>
        <Col className="row ps-2 col-8">
          <hr className="hrPrfileInfo text-center ms-3 mb-2" />
          <span className="fs-5">
            <strong>Profilo pubblico e URL</strong>
          </span>
          <p className="fw-lighter text-secondary">www.linkedin.com/in/todor-petrov-6ab7482b7</p>
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
      <Row className="bg-white d-flex  border border-dark-subtle rounded-3 mt-2">
        <Col xs="12">
          <p className="fs-6 text-center">
            <strong>Persone che potresti conoscere</strong>
          </p>
        </Col>
        <Col>
          <ListGroup>
            <ListGroupItem className="border border-0">
              <Row>
                {allUsersArray.slice(0, 10).map((user) => (
                  <>
                    <Col xs={2}>
                      <img className="rounded-circle imgProfileInfo" src={user.image} alt="" />
                    </Col>
                    <Col xs={10}>
                      <p className="mb-1">
                        <strong>
                          {user.name}&nbsp; {user.surname}
                        </strong>
                      </p>
                      <p className="mb-2">{user.title}</p>

                      <Button className="black-button rounded-pill mb-2 d-flex align-items-center justify-content-center">
                        <BsFillPersonPlusFill className="me-2" />
                        <strong>Collegati</strong>
                      </Button>
                    </Col>
                    <hr />
                  </>
                ))}
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
