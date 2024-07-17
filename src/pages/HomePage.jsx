import { Col, Container, Row } from "react-bootstrap";
import AsideLeftHomePage from "../components/AsideLeftHomePage";
import CreatePost from "../components/CreatePost";
import MyNavbar from "../components/MyNavbar";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <AsideLeftHomePage />
          </Col>
          <Col md={8}>
            <CreatePost />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
