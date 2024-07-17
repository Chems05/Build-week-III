import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { LiaPenSolid } from "react-icons/lia";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const usersArray = useSelector((state) => state.users.users);

  const UserCard = ({ user }) => (
    <Row className="mb-2 align-items-center">
      <Col xs={2} className="d-flex justify-content-center">
        <img
          className="rounded-circle imgProfileInfo"
          src={user.image}
          alt={user.name}
          style={{ width: "50px", height: "50px" }}
        />
      </Col>
      <Col xs={10} className="d-flex flex-column">
        <div>
          <p className="mb-1 fw-bold">
            {user.name}&nbsp;
            {user.surname}
          </p>
          <p className="mb-1 text-muted" style={{ fontSize: "0.9em" }}>
            {user.title}
          </p>
        </div>
      </Col>
      <Col xs={0} className="d-flex justify-content-center align-items-end ">
        <Button className="black-button mt-2   text-body d-flex align-items-center border border-secondary rounded-pill me-4 w-50">
          <BsFillPersonPlusFill size={17} className="ms-4" />
          <strong style={{fontSize: "0.9em" }} className="ms-2">Collegati</strong>
        </Button>
      </Col>
      <hr className="mt-3" />
    </Row>
  );

  return (
    <Container xs="4" md="4" className="mb-4">
      <Row className="bg-white d-flex justify-content-between border border-dark-subtle rounded-3">
        <Col className="row ps-2 col-8 ms-2">
          <span className="mt-3 ">
            <strong>Lingua del profilo</strong>
          </span>
          <small className="fw-lighter text-secondary mt-2 mb-4">Italiano</small>
        </Col>
        <Col className="text-end">
          <LiaPenSolid className="svgSize" />
        </Col>
        <Col className="row ps-2 col-8 ms-2">
          <hr className="hrPrfileInfo text-center ms-3 mb-2 " />
          <span className="mt-2">
            <strong>Profilo pubblico e URL</strong>
          </span>
          <small className="fw-lighter text-secondary mt-2 mb-3">www.linkedin.com/in/todor-petrov-6ab7482b7</small>
        </Col>
        <Col className="text-end">
          <LiaPenSolid className="svgSize" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-between border border-dark-subtle rounded-3 mt-2">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          className="m-0 p-0"
        />
      </Row>
      <Row className="bg-white d-flex border border-dark-subtle rounded-3 mt-2">
        <Col xs="12">
          <p className="fs-6 mt-3 ">
            <strong>Persone che potresti conoscere</strong>
            <br />
            <small className="text-muted">Dalla tua azienda</small>
          </p>
        </Col>
        <Col>
          <ListGroup>
            {usersArray.slice(0, 10).map((user) => (
              <ListGroupItem key={user._id} className="border border-0">
                <UserCard user={user} />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
