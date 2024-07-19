import { Col, Container, Row } from "react-bootstrap";
import AsideLeftHomePage from "../components/AsideLeftHomePage";
import CreatePost from "../components/CreatePost";
import MyNavbar from "../components/MyNavbar";
import Post from "../components/Post";
import LinkedinNotizie from "../components/LinkedinNotizie";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={3}>
            <AsideLeftHomePage />
          </Col>
          <Col xs={12} md={8} xl={5}>
            <CreatePost />
            <Post />
          </Col>
          <Col md={4} className="d-xl-none"></Col>
          <Col xs={12} md={7} xl={3} className="mt-3">
            <LinkedinNotizie />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
