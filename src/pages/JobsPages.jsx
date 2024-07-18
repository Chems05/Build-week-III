import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import LeftJobs from "../components/LeftJobs"

const JobsPage = () => {
    return (
      <>
        <MyNavbar />
        <Container className="mt-4">
          <Row>
            <Col md={6}>
            <LeftJobs />
            </Col>
           
          </Row>
        </Container>
      </>
    );
  };
  
  export default JobsPage;
  