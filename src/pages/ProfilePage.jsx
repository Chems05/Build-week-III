import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import MainProfileInfo from "../components/MainProfileInfo";
import ProfileInfo from "../components/ProfileInfo";
import Activity from "../components/Activity";
import Resource from "../components/Resource";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
   <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <MainProfileInfo />
            <Activity />
            <Resource />
          </Col>
          <Col md={4}>
            <ProfileInfo />
          </Col>
        </Row>
        <Footer />
      </Container>
 
      </>
  );
};

export default ProfilePage;
