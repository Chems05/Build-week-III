import { Col, Container, Row } from "react-bootstrap";
import AsideLeftHomePage from "../components/AsideLeftHomePage";
import CreatePost from "../components/CreatePost";
import MyNavbar from "../components/MyNavbar";
import Post from "../components/Post";
import LinkedinNotizie from "../components/LinkedinNotizie";
import AsideLeftHomeMobyle from "../components/AsideLeftHomeMobyle";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col className="d-none d-md-block" md={3}>
            <AsideLeftHomePage />
          </Col>
          <Col className="d-md-none" xs={12}>
            <AsideLeftHomeMobyle />
          </Col>
          <Col xs={12} md={8} xl={5}>
            <CreatePost />
            <Post />
          </Col>
          <Col className="d-none d-md-block d-xl-none" md={4}></Col>
          <Col xs={12} md={4} xl={3} className="mt-3 mt-md-0">
            <LinkedinNotizie />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
