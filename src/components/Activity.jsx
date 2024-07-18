import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { FaRegThumbsUp, FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";

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

  const singleUserInfo = useSelector((state) => state.users.singleUser);
  const postsArray = useSelector((state) => state.posts.allPosts);

  const filterPostsByUserId = (posts, userId) => {
    return posts.filter((post) => post.user._id === userId);
  };

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
      {singleUserInfo !== null &&
        postsArray &&
        postsArray
          .filter((post) => post.user._id === singleUserInfo._id)
          .map((post) => (
            <Card key={post._id} className="mb-3 bg- text-dark border-transparent border-0">
              <Card.Body>
                <Card.Text style={{ color: "grey", fontSize: "12px" }}>
                  <strong>{post.user.name}</strong> ha pubblicato questo post - 1m
                </Card.Text>
                <Card.Text style={{ fontSize: "14px" }}>{post.text}</Card.Text>

                <Card.Link
                  style={{ textDecoration: "none", fontSize: "14px" }}
                  href={post.linkUrl}
                  className="text-black"
                >
                  <span>
                    <img style={{ width: "40px", height: "40px" }} src={post.user.image} alt="" />
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
