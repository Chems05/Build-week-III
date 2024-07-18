import { Card, Container, Image, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";


const FixedTopBar = ({show}) => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);

  return (
    <>
        {singleUserInfo && (
        <div className={`fixed-top-bar ${show ? 'sticky' : ''}`}>
          <Card className="w-100 p-3 mt-5 d-none d-lg-block">
            <Container>
              <Row className="align-items-center">
                <Col xs={6} className="d-flex align-items-center">
                  <Image
                    className="border border-white border-2"
                    src={singleUserInfo.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="ms-3">
                    <strong>
                      {singleUserInfo.name} {singleUserInfo.surname}
                    </strong>
                    <div>{singleUserInfo.title}</div>
                  </div>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                  <Button style={{fontSize:'14px'}} className="me-4 bg-white text-secondary border-secondary rounded-pill d-none d-lg-block  ">Altro</Button>
                  <Button style={{fontSize:'14px'}}  className="me-4 bg-white text-primary border-primary rounded-pill d-none d-lg-block ">Aggiungi sezione del profilo</Button>
                  <Button style={{fontSize:'14px'}} className="me-1 bg-primary text-white border-primary rounded-pill d-none d-lg-block">Disponibile per</Button>
                </Col>
              </Row>
            </Container>
          </Card>
        </div>
      )}
    </>
  );
};

export default FixedTopBar;
