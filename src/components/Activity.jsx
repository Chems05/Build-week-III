import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Image, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Asterisk, Calendar3, Clock, EmojiSmile, ImageAlt, Pencil, PlusLg } from "react-bootstrap-icons";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FaRegThumbsUp, FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost, getAllPosts } from "../redux/actions/postsActions";

const Activity = () => {
  const dispatch = useDispatch();

  const singleUserInfo = useSelector((state) => state.users.singleUser);
  const postsArray = useSelector((state) => state.posts.allPosts);

  const [textPostForm, setTextPostForm] = useState({
    text: "",
  });
  const [show, setShow] = useState(false);

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

  return (
    <Container className=" bg-white border border-dark-subtle rounded-3 text-dark p-4 mt-5">
      <Row className="mb-3">
        <Col md={8}>
          <h4>Attività</h4>
          <p style={{ color: "#0A66C2" }}>13 follower</p>
          <Button variant="success" className="rounded-pill btns" size="sm">
            Post
          </Button>
          <span>
            <Button variant="light text-secondary border-secondary" size="sm" className="ms-2 rounded-pill btns">
              Immagini
            </Button>
          </span>
        </Col>
        <Col md={4} className="text-end">
          <Button variant="outline-primary" className="rounded-pill me-2" size="sm">
            Crea un post
          </Button>
          <Pencil />
        </Col>
      </Row>
      {/* map all'array di post filtrato in base all'id */}
      {singleUserInfo !== null &&
        postsArray &&
        postsArray
          .filter((post) => post.user._id === singleUserInfo._id)
          .map((post) => (
            <Card key={post._id} className="mb-3 bg- text-dark border-transparent border-0">
              <Card.Body>
                <Card.Text className="d-flex" style={{ color: "grey", fontSize: "12px" }}>
                  <strong>{post.user.name}</strong>&nbsp; ha pubblicato questo post - 1m
                  <div className="d-flex ms-auto">
                    <BsPencil
                      onClick={handleShow}
                      style={{
                        cursor: "pointer",
                        marginRight: "15px",
                        marginTop: "3px",
                        fontSize: "16",
                        color: "#212529",
                      }}
                    />
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
                          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltipImage}>
                            <ImageAlt className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipCalendar}
                          >
                            <Calendar3 className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
                          </OverlayTrigger>
                          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltipStar}>
                            <Asterisk className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
                          </OverlayTrigger>
                          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltipPlus}>
                            <PlusLg className="me-3" style={{ color: "#666666", cursor: "pointer" }} />
                          </OverlayTrigger>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <div
                          className=" d-inline-flex align-items-center justify-content-center black-button rounded-circle"
                          style={{ width: "42px", height: "42px", border: "none" }}
                        >
                          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltipClock}>
                            <Clock style={{ color: "#404040" }} />
                          </OverlayTrigger>
                        </div>
                        <div
                          className="blue-button rounded-pill"
                          onClick={(e) => {
                            e.preventDefault();

                            // Aggiunge un nuovo post
                            if (singleUserInfo._id === post.user._id) {
                              dispatch(editPost(post._id, textPostForm));
                            }

                            handleClose();
                            dispatch(getAllPosts());
                          }}
                        >
                          Pubblica
                        </div>
                      </Modal.Footer>
                    </Modal>
                    <BsTrash
                      onClick={() => {
                        dispatch(deletePost(post._id));
                        dispatch(getAllPosts());
                      }}
                      style={{
                        cursor: "pointer",

                        marginTop: "3px",
                        fontSize: "16",
                        color: "#212529",
                      }}
                    />
                  </div>
                </Card.Text>
                <Card.Text style={{ fontSize: "14px" }}>{post.text}</Card.Text>

                <Card.Link
                  style={{ textDecoration: "none", fontSize: "14px" }}
                  href={post.linkUrl}
                  className="text-black"
                >
                  <span>
                    <img style={{ width: "40px", height: "40px" }} src="https://via.placeholder.com/50" alt="" />
                  </span>
                  {post.link}
                </Card.Link>
                <div className="d-flex align-items-center mt-3">
                  <FaRegThumbsUp className="me-2 text-primary" /> 2
                  <FaRegComment className="ms-4 me-2 text-success" /> 0
                </div>
              </Card.Body>
              <hr />
            </Card>
          ))}
      <Row>
        <Col className="text-center">
          <Button style={{ color: "grey", fontSize: "15px" }} variant="" className="text-secondary">
            Mostra tutti i post →
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
