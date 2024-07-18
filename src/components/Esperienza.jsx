import { useState, useEffect } from "react";
import { Card, ListGroup, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { BsPlusLg, BsTrash, BsPencil } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperiences, addExperience, deleteExperience, updateExperience } from "../redux/actions";

const Esperienza = () => {
  // Stato per mostrare/nascondere il modal
  const [showModal, setShowModal] = useState(false);
  // Stato per la modalità di modifica
  const [editMode, setEditMode] = useState(false);
  // Stato per l'esperienza selezionata da modificare
  const [selectedExperience, setSelectedExperience] = useState(null);
  // Stato per i dati dell'esperienza
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "",
  });

  const dispatch = useDispatch();
  // ID utente
  const teamId = {giuseeppId:"66991b7287ffcb001574cb79",gianlucaId:"6694d9a2196d7b0015d6b528"}
  
  // Seleziona l'array delle esperienze dal Redux store
  const experiencesArray = useSelector((state) => state.experiences.experiencesArray || []);

  // Recupera le esperienze all'inizio e ad ogni aggiornamento dell'ID utente
  useEffect(() => {
    dispatch(fetchExperiences(teamId.giuseeppId));
  }, [dispatch, teamId.giuseeppId]);

  // Mostra il modal
  const handleShow = () => setShowModal(true);
  // Chiude il modal e resetta i dati
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
      image: "",
    });
  };

  // Gestisce i cambiamenti nei campi del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  // Gestisce l'invio del form per aggiungere o aggiornare un'esperienza
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Aggiorna una esperienza esistente
      dispatch(updateExperience(teamId.giuseeppId, selectedExperience._id, experienceData));
    } else {
      // Aggiunge una nuova esperienza
      dispatch(addExperience(teamId.giuseeppId, experienceData));
    }
    
    handleClose();
    dispatch(fetchExperiences(teamId.giuseeppId));
  };

  // Gestisce la cancellazione di un'esperienza
  const handleDelete = (experienceId) => {
    dispatch(deleteExperience(teamId.giuseeppId, experienceId));
  };

  // Prepara i dati dell'esperienza per la modifica
  const handleEdit = (experience) => {
    setSelectedExperience(experience);
    setExperienceData({
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      area: experience.area,
      image: experience.image,
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
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    style={{ width: "80px", height: "60px", marginRight: "15px", marginTop: "3px" }}
                  />
                  <div>
                    <h5 style={{ fontWeight: "bold", fontSize: "16px" }}>{exp.role}</h5>
                    <h6 style={{ fontSize: "14px" }}>{exp.company}</h6>
                    <h6 style={{ color: "grey", fontSize: "13px" }}>
                      {new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
                    </h6>
                    <h6 style={{ color: "grey", fontSize: "13px" }}>{exp.description}</h6>
                    <p style={{ color: "grey", fontSize: "13px" }}>{exp.area}</p>
                   
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
          <Modal.Title>{editMode ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
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
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={experienceData.image}
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
