import { useState } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import {
  Asterisk,
  Calendar3,
  Clock,
  EmojiSmile,
  ImageAlt,
  PlusLg,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, getAllPosts } from "../redux/actions/postsActions";

const CreatePost = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);
  const [textPostForm, setTextPostForm] = useState({
    text: "",
  });

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltipImage = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Aggiungi contenuto multimediale
    </Tooltip>
  );
  const renderTooltipCalendar = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Crea un evento
    </Tooltip>
  );
  const renderTooltipStar = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Festeggia un occasione speciale
    </Tooltip>
  );
  const renderTooltipPlus = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Altro
    </Tooltip>
  );
  const renderTooltipClock = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Programma per un secondo momento
    </Tooltip>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aggiunge un nuovo post
    dispatch(addNewPost(textPostForm));

    handleClose();
    dispatch(getAllPosts());
  };

  return (
    <Container className="p-2 border border-2 rounded bg-white">
      <Row className="d-flex align-items-center mb-2">
        <Col className="d-flex justify-content-center" md={2}>
          {singleUserInfo && (
            <Image
              src={singleUserInfo.image}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
          )}
        </Col>
        <Col className="ps-0" md={10}>
          <div
            className="black-button rounded-pill d-flex align-items-center border-secondary"
            style={{ height: "3em" }}
            onClick={handleShow}
          >
            <small style={{ color: "#474747" }}> Crea un post </small>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around">
        <Col
          md={4}
          className="black-button rounded p-2 d-flex align-items-center"
          style={{ border: "none" }}
        >
          <ImageAlt className="me-1" style={{ color: "#378FE9" }} />
          <span style={{ fontSize: "13px", color: "#474747" }}>
            Contenuti multimediali
          </span>
        </Col>
        <Col
          md={2}
          className="black-button rounded p-2 d-flex align-items-center"
          style={{ border: "none" }}
        >
          <Calendar3 className="me-1" style={{ color: "#C37D16" }} />
          <span style={{ fontSize: "13px", color: "#474747" }}>Evento</span>
        </Col>
        <Col
          md={4}
          className="black-button rounded p-2 d-flex align-items-center"
          style={{ border: "none" }}
        >
          <svg
            style={{ color: "#E06847", width: "1.5em" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="content-align-left-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
          >
            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
          </svg>
          <span style={{ fontSize: "13px", color: "#474747" }}>
            Scrivi un articolo
          </span>
        </Col>
      </Row>

      {/* Modale al click del bottone per creare un post */}

      {singleUserInfo && (
        <Modal className="mt-5" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Row>
                <Col
                  style={{ border: "none" }}
                  className="d-flex black-button rounded p-2"
                >
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  style={{ border: "none", boxShadow: "none", resize: "none" }}
                  placeholder="Di cosa vorresti parlare"
                  as="textarea"
                  rows={4}
                  onChange={(e) => {
                    setTextPostForm({ text: e.target.value });
                  }}
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
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipImage}
              >
                <ImageAlt
                  className="me-3"
                  style={{ color: "#666666", cursor: "pointer" }}
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipCalendar}
              >
                <Calendar3
                  className="me-3"
                  style={{ color: "#666666", cursor: "pointer" }}
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipStar}
              >
                <Asterisk
                  className="me-3"
                  style={{ color: "#666666", cursor: "pointer" }}
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipPlus}
              >
                <PlusLg
                  className="me-3"
                  style={{ color: "#666666", cursor: "pointer" }}
                />
              </OverlayTrigger>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div
              className=" d-inline-flex align-items-center justify-content-center black-button rounded-circle"
              style={{ width: "42px", height: "42px", border: "none" }}
            >
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipClock}
              >
                <Clock style={{ color: "#404040" }} />
              </OverlayTrigger>
            </div>
            <div className="blue-button rounded-pill" onClick={handleSubmit}>
              Pubblica
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default CreatePost;
