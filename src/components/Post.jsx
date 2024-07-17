import { Card, Col, Image, Row } from "react-bootstrap";
import { Calendar3, CardText, ImageAlt } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Post = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Text>
          <Row>
            <Col className="d-flex">
              {singleUserInfo && (
                <>
                  <Image
                    className="me-2"
                    src={singleUserInfo.image}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  />

                  <div>
                    <p className="mb-0">
                      {singleUserInfo.name}&nbsp;
                      {singleUserInfo.surname}
                    </p>
                    <p className="text-secondary">{singleUserInfo.title}</p>
                  </div>
                </>
              )}
            </Col>
            <Col className="d-inline-flex justify-content-end">
              <div style={{ border: "none" }} className="light-blue-button rounded d-inline align-items-center">
                Segui
              </div>
            </Col>
          </Row>
        </Card.Text>
        <Card.Text>Text of the Post</Card.Text>
        <hr />
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
      </Card.Body>
    </Card>
  );
};

export default Post;
