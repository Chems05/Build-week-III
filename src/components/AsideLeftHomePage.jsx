import { Card, ListGroup,
    
 } from "react-bootstrap";
import { ArrowDown, Hash, PlusLg, SquareFill } from "react-bootstrap-icons";
import { BsFillBookmarkFill } from "react-icons/bs";

const AsideLeftHomePage = () => {
  return (
    <>
      <Card className="mb-3">
        <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4E16AQF8TC4KCgMDNA/profile-displaybackgroundimage-shrink_350_1400/0/1523715805906?e=1726704000&v=beta&t=wGs6DFrGhY_bDMVESIcstUxHmOmzNXgZTlG5gqy9Jn4" />
        <Card.Body className="text-center">
          <Card.Img
            src="path/to/profile/image.jpg"
            className="rounded-circle mb-2"
            style={{ width: "80px", height: "80px" }}
          />
          <Card.Title className="mt-3" style={{ fontSize: "16px" }}>
            Nome Cognome
          </Card.Title>
          <Card.Text style={{ color: "grey", fontSize: "13px" }}>
            Studio presso Epicode, per diventare un Fullstack developer
          </Card.Text>
        </Card.Body>
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
        <Card.Body>
          <small style={{ fontSize: "13px", color: "grey" }}>
            Raggiungi nuove vette professionali <br /> con Premium
          </small>
          <br />
          <small style={{ fontSize: "13px" }} className="d-flex align-items-center">
            {" "}
            <SquareFill className="me-2" style={{ color: "#b37d00" }} /> Prova per 0 EUR
          </small>
          <hr />
          <small style={{ fontSize: "13px" }} className="d-flex align-items-center">
            <BsFillBookmarkFill className="me-2" />
            Elementi salvati{" "}
          </small>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <h6>Recenti</h6>
          </Card.Title>
          <ListGroup className="list-group-flush p-1 mb-4">
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              <Hash className="me-1 text-black" /> produttività{" "}
            </span>
            <br />
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              <Hash className="me-1 text-black" /> innovazione{" "}
            </span>
            <br />
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              <Hash className="me-1 text-black" /> fibraottica{" "}
            </span>
            <br />
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              <Hash className="me-1 text-black" /> startup{" "}
            </span>
            <br />
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              <Hash className="me-1 text-black" /> innovation{" "}
            </span>
          </ListGroup>

          <h6 style={{ textDecoration: "none", color: "#0A66C2", fontSize: "14px" }} href="#gruppi">
            Gruppi
          </h6>
          <br />
          <p style={{ textDecoration: "none", color: "#0A66C2", fontSize: "14px" }} href="#">
            Eventi{" "}
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
              {" "}
              <Hash className="me-1 text-black" /> produttività{" "}
            </span>
            <br />
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              <Hash className="me-1 text-black" /> innovazione{" "}
            </span>
            <br />
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              <Hash className="me-1 text-black" /> fibraottica{" "}
            </span>
            <br />
            <span style={{ fontSize: "14px", color: "#838383" }}>
              {" "}
              Visualizza altro <ArrowDown />{" "}
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
  );
};

export default AsideLeftHomePage;
