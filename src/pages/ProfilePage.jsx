import Footer from "../components/Footer";
import Activity from "../components/Activity";
import MainProfileInfo from "../components/MainProfileInfo";
import MyNavbar from "../components/MyNavbar";
import ProfileInfo from "../components/ProfileInfo";
import { Col, Container, Row } from "react-bootstrap";
import Analytics from "../components/Analytics";

const ProfilePage = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <MainProfileInfo />
            <Analytics />
            <Activity />
            <Footer />
          </Col>

          <Col md={4}>
            <ProfileInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
