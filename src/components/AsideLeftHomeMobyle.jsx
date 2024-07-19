import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { SquareFill } from "react-bootstrap-icons";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";

const AsideLeftHomeMobyle = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);
  const [moreElements, setMoreElements] = useState(false);

  const handleShowelements = () => {
    setMoreElements(!moreElements);
  };

  return (
    <>
      {singleUserInfo && (
        <>
          <Card className="mb-2">
            <Card.Img
              variant="top"
              src="https://media.licdn.com/dms/image/C4E16AQF8TC4KCgMDNA/profile-displaybackgroundimage-shrink_350_1400/0/1523715805906?e=1726704000&v=beta&t=wGs6DFrGhY_bDMVESIcstUxHmOmzNXgZTlG5gqy9Jn4"
            />
            <Card.Body className="">
              <Card.Img
                src={singleUserInfo.image}
                className="rounded-circle mb-2 position-absolute mb-3 asideLeftHomePage "
                style={{ width: "80px", height: "80px", marginLeft: "30% " }}
              />
            </Card.Body>
            <Card.Title className="mt-5 " style={{ fontSize: "16px", marginLeft: "30%" }}>
              <strong>
                {singleUserInfo.name}&nbsp;
                {singleUserInfo.surname}
              </strong>
            </Card.Title>
            <Card.Text style={{ color: "grey", fontSize: "13px", marginLeft: "30%" }}>{singleUserInfo.title}</Card.Text>
            <ListGroup className="list-group-flush p-3">
              <p style={{ fontSize: "13px", color: "grey", marginBottom: "5px" }}>
                Visitatori del profilo{" "}
                <span style={{ color: "#0A66C2" }} className="float-end">
                  26
                </span>
              </p>
              <p style={{ fontSize: "13px", color: "grey", marginBottom: "5px" }}>
                Impressioni del post{" "}
                <span style={{ color: "#0A66C2" }} className="float-end">
                  722
                </span>
              </p>
            </ListGroup>
          </Card>

          {moreElements && (
            <>
              <Card>
                <Card.Body>
                  <small style={{ fontSize: "13px", color: "grey" }}>
                    Raggiungi nuove vette professionali <br /> con Premium
                  </small>
                  <br />
                  <small style={{ fontSize: "13px" }} className="d-flex align-items-center">
                    <SquareFill className="me-2" style={{ color: "#b37d00" }} /> Prova per 0 EUR
                  </small>
                </Card.Body>
              </Card>
              <Card className="mt-2">
                <Card.Body>
                  <small style={{ fontSize: "13px" }} className="d-flex align-items-center asideTextIcon">
                    <BsFillBookmarkFill className="me-2" />
                    Elementi salvati
                  </small>
                  <small style={{ fontSize: "13px" }} className="d-flex align-items-center asideTextIcon mt-2">
                    <HiUserGroup className="me-2" /> Gruppi
                  </small>
                  <small style={{ fontSize: "13px" }} className="d-flex align-items-center asideTextIcon mt-2">
                    <FaRegCalendar className="me-2" /> Gruppi
                  </small>
                </Card.Body>
              </Card>
            </>
          )}
          <Card className="mt-2 mb-2 border-0">
            <Button
              className="btnNoFocus btnVediAltro text-dark"
              style={{ height: "40px" }}
              onClick={handleShowelements}
              onMouseDown={(e) => e.preventDefault()}
            >
              {moreElements ? (
                <p style={{ fontSize: "14px" }}>
                  Meno dettagli <IoIosArrowUp className="iconArrow" />
                </p>
              ) : (
                <p style={{ fontSize: "14px" }}>
                  Vedi altro <IoIosArrowDown className="iconArrow" />
                </p>
              )}
            </Button>
          </Card>
        </>
      )}
    </>
  );
};

export default AsideLeftHomeMobyle;
