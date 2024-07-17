import { useState } from "react";
import { Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { Asterisk, Calendar3, CardText, Clock, EmojiSmile, ImageAlt, PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="border border-3 rounded bg-white">
      <Row className="d-flex align-items-center mb-2">
        <Col md={1}>
          {singleUserInfo && (
            <Image
              src={singleUserInfo.image}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />
          )}
        </Col>
        <Col md={11}>
          <div
            className="black-button rounded-pill d-flex align-items-center"
            style={{ height: "3em" }}
            onClick={handleShow}
          >
            Crea un post
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around">
        <Col md={4} className="black-button rounded p-2 d-flex align-items-center" style={{ border: "none" }}>
          <ImageAlt className="me-3" style={{ color: "#378FE9" }} />
          <span>Contenuti multimediali</span>
        </Col>
        <Col md={2} className="black-button rounded p-2 d-flex align-items-center" style={{ border: "none" }}>
          <Calendar3 className="me-3" style={{ color: "#C37D16" }} />
          <span>Evento</span>
        </Col>
        <Col md={4} className="black-button rounded p-2 d-flex align-items-center" style={{ border: "none" }}>
          <CardText className="me-3" style={{ color: "#E06847" }} />
          <span>Scrivi un articolo</span>
        </Col>
      </Row>

      {/* Modale al click del bottone per creare un post */}

      {singleUserInfo && (
        <Modal className="mt-5" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Row>
                <Col style={{ border: "none" }} className="d-flex black-button rounded p-2">
                  <Image
                    src={singleUserInfo.image}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="ms-2">
                    <p style={{ fontWeight: "500" }} className="mb-0">
                      {singleUserInfo.name}&nbsp;
                      {singleUserInfo.surname}
                    </p>
                    <span style={{ fontSize: "0.7em" }}>Pubblica:chiunque</span>
                  </div>
                </Col>
              </Row>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  style={{ border: "none", boxShadow: "none", resize: "none" }}
                  placeholder="Di cosa vorresti parlare"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
            </Form>
            <div
              className="mb-3 d-inline-flex align-items-center justify-content-center black-button rounded-circle"
              style={{ width: "42px", height: "42px", border: "none" }}
            >
              <EmojiSmile style={{ color: "#404040" }} />
            </div>
            <div className="d-flex align-items-center ">
              <ImageAlt className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
              <Calendar3 className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
              <Asterisk className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
              <PlusLg className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div
              className=" d-inline-flex align-items-center justify-content-center black-button rounded-circle"
              style={{ width: "42px", height: "42px", border: "none" }}
            >
              <Clock style={{ color: "#404040" }} />
            </div>
            <div className="blue-button rounded-pill" onClick={handleClose}>
              Pubblica
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default CreatePost;
