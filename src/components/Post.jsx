import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Post = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);

  return (
    <Card>
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
