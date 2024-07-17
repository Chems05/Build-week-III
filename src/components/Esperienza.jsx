import { useState, useEffect } from "react";
import { Card, ListGroup, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { BsPlusLg, BsTrash, BsPencil } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperiences, addExperience, deleteExperience, updateExperience } from "../redux/actions";

const Esperienza = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    logo: "",
  });

  const dispatch = useDispatch();
  const userId = "6694d9a2196d7b0015d6b528"; // Update with dynamic user ID if needed
  const experiencesArray = useSelector((state) => state.experiences.experiencesArray || []);

  useEffect(() => {
    dispatch(fetchExperiences(userId));
  }, [dispatch, userId]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditMode(false);
    setExperienceData({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
      logo: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateExperience(userId, selectedExperience._id, experienceData));
    } else {
      dispatch(addExperience(userId, experienceData));
    }
    
    handleClose();
    dispatch(fetchExperiences(userId));
  };

  const handleDelete = (experienceId) => {
    dispatch(deleteExperience(userId, experienceId));
  };

  const handleEdit = (experience) => {
    setSelectedExperience(experience);
    setExperienceData({
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      area: experience.area,
      logo: experience.logo,
    });
    setEditMode(true);
    handleShow();
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
              <BsPlusLg
                style={{ cursor: "pointer", marginRight: "15px", marginTop: "3px" }}
                onClick={() => {
                  setEditMode(false);
                  handleShow();
                }}
              />
            </Col>
          </Row>
          {experiencesArray.map((exp) => (
            <ListGroup.Item key={exp._id}>
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
                      {new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
                    </p>
                    <p style={{ color: "grey", fontSize: "13px" }}>{exp.area}</p>
                    <p style={{ color: "grey", fontSize: "13px" }}>{exp.description}</p>
                  </div>
                </div>
                <div>
                  <BsPencil
                    style={{ cursor: "pointer", marginRight: "15px", marginTop: "3px" }}
                    onClick={() => handleEdit(exp)}
                  />
                  <BsTrash
                    style={{ cursor: "pointer", marginRight: "15px", marginTop: "3px" }}
                    onClick={() => handleDelete(exp._id)}
                  />
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      <Modal className="mt-5" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Experience" : "Add New Experience"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                name="role"
                value={experienceData.role}
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
                value={experienceData.company}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={experienceData.startDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={experienceData.endDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={experienceData.description}
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
                value={experienceData.area}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editMode ? "Update Experience" : "Add Experience"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Esperienza;
