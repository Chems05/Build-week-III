import { Card, Col, Image, Row } from "react-bootstrap";
import { ArrowRepeat, ChatRightText, HandThumbsUp, Send } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Post = () => {
  const postsArray = useSelector((state) => state.posts.allPosts);
  return (
    <>
      {postsArray
        .slice(-20)
        .reverse()
        .map((post) => (
          <Card key={post._id} className="mt-3">
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col className="d-flex">
                    {postsArray && (
                      <>
                        <Image
                          className="me-2"
                          src={post.user.image}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                          }}
                        />

                        <div>
                          <p style={{ fontWeight: "bold" }} className="mb-0">
                            {post.user.name}&nbsp;{post.user.surname}
                          </p>
                          <p className="text-secondary">{post.user.title}</p>
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
              <Card.Text>{post.text}</Card.Text>
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
        ))}
    </>
  );
};

export default Post;
