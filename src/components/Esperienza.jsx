import{ useState, useEffect } from "react";
import { Card, ListGroup, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperiences, addExperience, deleteExperience } from "../redux/actions";

const Esperienza = () => {
  const [showModal, setShowModal] = useState(false);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    logo: "https://via.placeholder.com/50",
  });

  const dispatch = useDispatch();
  const experiencesArray = useSelector((state) => state.experiences.experiencesArray);

  useEffect(() => {
    // Simulate fetching experiences (normally this would be an API call)
    dispatch(fetchExperiences([
      {
        id: 1,
        role: "Full Stack Web Developer",
        company: "FizzBuzz",
        startDate: "2022-06-16",
        endDate: "2023-06-16",
        description: "Implementing new features",
        area: "Milan",
        logo: "https://via.placeholder.com/50",
      },
      {
        id: 2,
        role: "Junior Developer",
        company: "Innovatech Ltd.",
        startDate: "2018-03-01",
        endDate: "2020-12-31",
        description: "Developed various web applications",
        area: "New York, USA",
        logo: "https://via.placeholder.com/50",
      },
    ]));
  }, [dispatch]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience({
      ...newExperience,
      id: Date.now(), // Simulate unique ID (normally this would come from the server)
    }));
    setNewExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
      logo: "https://via.placeholder.com/50",
    });
    handleClose();
  };

  const handleDelete = (experienceId) => {
    dispatch(deleteExperience(experienceId));
  };

  return (
    <>
      <Card className="mt-5">
        <ListGroup variant="flush">
          <Row>
            <Col>
              <h4 className="ms-3 mt-2 mb-2">Esperienza</h4>
            </Col>
            <Col className="text-end">
              <BsPlusLg style={{ cursor: "pointer", marginRight: "15px", marginTop: "3px" }} onClick={handleShow} />
            </Col>
          </Row>
          {experiencesArray.map((exp) => (
            <ListGroup.Item key={exp.id}>
              <div className="d-flex align-items-start justify-content-between">
                <div className="d-flex align-items-start">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    style={{ width: "50px", height: "50px", marginRight: "15px", marginTop: "3px" }}
                  />
                  <div>
                    <h5 style={{ fontWeight: "bold", fontSize: "16px" }}>{exp.role}</h5>
                    <p style={{ fontSize: "14px" }}>{exp.company}</p>
                    <p style={{ color: "grey", fontSize: "13px" }}>
                      {exp.startDate} - {exp.endDate || "Present"}
                    </p>
                    <p style={{ color: "grey", fontSize: "13px" }}>{exp.area}</p>
                    <p style={{ color: "grey", fontSize: "13px" }}>{exp.description}</p>
                  </div>
                </div>
                <BsTrash
                  style={{ cursor: "pointer", marginRight: "15px", marginTop: "3px" }}
                  onClick={() => handleDelete(exp.id)}
                />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      <Modal className="mt-5" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                name="role"
                value={newExperience.role}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                name="company"
                value={newExperience.company}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={newExperience.startDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="endDate" value={newExperience.endDate} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={newExperience.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter area"
                name="area"
                value={newExperience.area}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Experience
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Esperienza;
