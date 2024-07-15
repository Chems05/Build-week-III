import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import MainProfileInfo from "../components/MainProfileInfo";
import ProfileInfo from "../components/ProfileInfo";
import Activity from "../components/Activity";
import Resource from "../components/Resource";
import Footer from "../components/Footer";
import Informazioni from "../components/Informazioni";
import Analytics from "../components/Analytics";
import Competenze from "../components/Competenze";

const ProfilePage = () => {
  return (
    <div style={{ color: "grey" }}>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <MainProfileInfo />
            <Informazioni />
            <Competenze />
            <Activity />
            <Resource />
            <Analytics />
            <Informazioni />
          </Col>
          <Col md={4}>
            <ProfileInfo />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default ProfilePage;
