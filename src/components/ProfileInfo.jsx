
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { LiaPenSolid } from 'react-icons/lia';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const ProfileInfo = () => {
  const users = [
    {
      name: 'Noemi D.',
      role: 'Ethical Hacking Student 🧑‍💻 | Junior Cybersecurity Analyst',
      avatar: 'https://media.licdn.com/dms/image/D5603AQHtmaSyfliXzQ/profile-displayphoto-shrink_100_100/0/1714389091023?e=1726704000&v=beta&t=Lx7IPkUanWzlX-2b967cjx1P-6DrU043cbBzdO-lzPY',
    },
   
  ];

  const UserCard = ({ user }) => (
    <Row className="mb-2 align-items-center">
    <Col xs={2} className="d-flex justify-content-center">
      <img
        className="rounded-circle imgProfileInfo"
        src={user.avatar}
        alt={user.name}
        style={{ width: '50px', height: '50px' }}
      />
    </Col>
    <Col xs={10} className="d-flex flex-column">
      <div>
        <p className="mb-1 fw-bold">{user.name}</p>
        <p className="mb-1 text-muted" style={{ fontSize: '0.9em' }}>{user.role}</p>
      </div>
    </Col>
    <Col xs={0} className="d-flex justify-content-center align-items-end ">
      <Button className="btnPeaples mt-2 p-1 bg-transparent text-body d-flex align-items-center border border-secondary rounded-pill me-4 w-50">
        <BsFillPersonPlusFill className="ms-3" />
        <strong className='ms-4'>Collegati</strong>
      </Button>
    </Col>
    </Row>
  );

  return (
    <Container xs="4" md="4" className="mb-4">
      <Row className="bg-white d-flex justify-content-between border border-dark-subtle rounded-3">
        <Col className="row ps-2 col-8">
          <span className="fs-5">
            <strong>Lingua del profilo</strong>
          </span>
          <p className="fw-lighter text-secondary">Italiano</p>
        </Col>
        <Col className="text-end">
          <LiaPenSolid className="svgSize" />
        </Col>
        <Col className="row ps-2 col-8">
          <hr className="hrPrfileInfo text-center ms-3 mb-2" />
          <span className="fs-5">
            <strong>Profilo pubblico e URL</strong>
          </span>
          <p className="fw-lighter text-secondary">
            www.linkedin.com/in/todor-petrov-6ab7482b7
          </p>
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
            {users.map((user, index) => (
              <ListGroupItem key={index} className="border border-0">
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
