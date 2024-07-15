import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaPen, FaRegThumbsUp, FaRegComment } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Activity = () => {
  const posts = [
    {
      id: 1,
      user: "User",
      content: "un altro grande traguardo ✌️",
      link: "EPICODE - Sblocca competenze tech e inizia subito a lavorare | Certificate for Chems Eddine Zghaidi",
      linkUrl: "https://certificates.epicode.com",
      likes: 2,
      comments: 0,
    },
    {
      id: 2,
      user: "User",
      content: "un altra settimana un altro successo",
      link: "EPICODE - Sblocca competenze tech e inizia subito a lavorare | Certificate for Chems Eddine Zghaidi",
      linkUrl: "https://certificates.epicode.com",
      likes: 5,
      comments: 0,
    },
  ];

  return (
    <Container className="border border-dark-subtle rounded-3 text-dark p-4 mt-5">
      <Row className="mb-3">
        <Col md={8}>
          <h4>Attività</h4>
          <p>13 follower</p>
        </Col>
        <Col md={4} className="text-end">
          <Button variant="outline-primary" size="sm">
            Crea un post <FaPen />
          </Button>
        </Col>
      </Row>
      {posts.map((post) => (
        <Card key={post.id} className="mb-3 bg- text-dark">
          <Card.Body>
            <Card.Text>
              <strong>{post.user}</strong> ha pubblicato questo post - 1m
            </Card.Text>
            <Card.Text>{post.content}</Card.Text>
            <Card.Link href={post.linkUrl} className="text-info">
              {post.link}
            </Card.Link>
            <div className="d-flex align-items-center mt-2">
              <FaRegThumbsUp className="me-2" /> {post.likes}
              <FaRegComment className="ms-4 me-2" /> {post.comments}
            </div>
          </Card.Body>
        </Card>
      ))}
      <Row>
        <Col className="text-center">
          <Button variant="link" className="text-info">
            Mostra tutti i post →
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
