import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import LeftJobs from "../components/LeftJobs";
import FooterJobPage from "../components/FooterJobPage";

const JobsPage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <LeftJobs />
          </Col>
          <Col md={3}>
            <FooterJobPage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsPage;
