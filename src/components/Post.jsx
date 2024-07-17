import { Card, Col, Image, Row } from "react-bootstrap";
import { ArrowRepeat, ChatRightText, HandThumbsUp, Send } from "react-bootstrap-icons";
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
        <hr className="mb-1" />
        <Row className="d-flex justify-content-around">
          <Col
            md={3}
            className="black-button rounded p-2 d-flex align-items-center justify-content-center"
            style={{ border: "none" }}
          >
            <HandThumbsUp className="me-3" />
            <span>Consiglia</span>
          </Col>
          <Col
            md={3}
            className="black-button rounded p-2 d-flex align-items-center justify-content-center"
            style={{ border: "none" }}
          >
            <ChatRightText className="me-3" />
            <span>Commenta</span>
          </Col>
          <Col
            md={3}
            className="black-button rounded p-2 d-flex align-items-center justify-content-center"
            style={{ border: "none" }}
          >
            <ArrowRepeat className="me-3" />
            <span>Diffondi il post</span>
          </Col>
          <Col
            md={2}
            className="black-button rounded p-2 d-flex align-items-center justify-content-center"
            style={{ border: "none" }}
          >
            <Send className="me-3" />
            <span>Invia</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Post;
