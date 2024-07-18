import { Col, Container, Row } from "react-bootstrap";
import AsideLeftHomePage from "../components/AsideLeftHomePage";
import CreatePost from "../components/CreatePost";
import MyNavbar from "../components/MyNavbar";
import Post from "../components/Post";
import LinkedinNotizie from "../components/LinkedinNotizie";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <AsideLeftHomePage />
          </Col>
          <Col md={6}>
            <CreatePost />
            <Post />
          </Col>
          <Col md={3}>
            <LinkedinNotizie />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
