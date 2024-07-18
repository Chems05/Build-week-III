import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import LeftJobs from "../components/LeftJobs";
import MiddleJobs from "../components/MiddleJobs";

const JobsPage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <LeftJobs />
          </Col>
          <Col md={6}>
            <MiddleJobs />
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsPage;
