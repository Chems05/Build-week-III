import { Card, ListGroup } from "react-bootstrap";
import { ArrowDown, Hash, PlusLg, SquareFill } from "react-bootstrap-icons";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { HiUserGroup } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";

const AsideLeftHomePage = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);

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

          <Card className="mt-2">
            <Card.Body>
              <Card.Title className="mb-2">
                <h6>Recenti</h6>
              </Card.Title>
              <ListGroup className="list-group-flush p-1 mb-4">
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> produttività
                </span>
                <span></span>
                <br />
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> innovazione
                </span>
                <br />
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> fibraottica
                </span>
                <br />
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> startup
                </span>
                <br />
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> innovation
                </span>
              </ListGroup>

              <h6 style={{ textDecoration: "none", color: "#0A66C2", fontSize: "14px" }} href="#gruppi">
                Gruppi
              </h6>
              <br />
              <p style={{ textDecoration: "none", color: "#0A66C2", fontSize: "14px" }} href="#">
                Eventi
                <span style={{ color: "black" }} className="float-end">
                  <PlusLg />
                </span>
              </p>
              <br />
              <p style={{ textDecoration: "none", color: "#0A66C2", fontSize: "14px" }} className=" mb-2">
                Hashtag seguiti
              </p>
              <ListGroup className="list-group-flush p-1 ">
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> produttività
                </span>
                <br />
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> innovazione
                </span>
                <br />
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  <Hash className="me-1 text-black" /> fibraottica
                </span>
                <br />
                <span style={{ fontSize: "14px", color: "#838383" }}>
                  Visualizza altro <ArrowDown />
                </span>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Link style={{ textDecoration: "none", color: "grey" }} href="#">
                Scopri di più
              </Card.Link>
            </Card.Footer>
          </Card>
        </>
      )}
    </>
  );
};

export default AsideLeftHomePage;
