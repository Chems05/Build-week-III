import { Navbar, Nav, Form, FormControl, Container, NavDropdown, Image } from "react-bootstrap";
import { FaTh } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "../assets/mynavbar.css";
import { BiCaretDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsersInformations, getUserInformation } from "../redux/actions";

const MyNavbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInformation());
    dispatch(getAllUsersInformations());
  }, []);

  return (
    <Navbar bg="light" variant="light" expand="lg" className="px-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <BsLinkedin size={33} className="ms-2 " color="#0077b5" />
        </Navbar.Brand>
        <Form className="d-flex mx-2 search-form">
          <div className="search-container ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="secondary"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <FormControl
              type="search"
              placeholder="Cerca"
              className="me-2 search-input"
              aria-label="Search"
              style={{ borderRadius: "2px" }}
            />
          </div>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="d-flex flex-column align-items-center ms-5">
              <svg width="24" height="20" fill="currentColor" viewBox="0 0 24 24" className="mb-1  mt-2">
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              Home
            </Nav.Link>
            <Nav.Link href="#network" className="d-flex flex-column align-items-center">
              <svg width="24" height="20" fill="currentColor" viewBox="0 0 24 24" className="mb-1 mx- mt-2">
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>{" "}
              Rete
            </Nav.Link>
            <Nav.Link href="#jobs" className="d-flex flex-column align-items-center">
              <svg width="24" height="20" fill="currentColor" viewBox="0 0 24 24" className="mb-1 mx- mt-2">
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>{" "}
              Lavoro
            </Nav.Link>
            <Nav.Link href="#messaging" className="d-flex flex-column align-items-center">
              <svg width="24" height="20" fill="currentColor" viewBox="0 0 24 24" className="mb-1 mx- mt-2">
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>{" "}
              Messaggistica
            </Nav.Link>
            <Nav.Link href="#notifications" className="d-flex flex-column align-items-center me-2">
              <svg width="24" height="20" fill="currentColor" viewBox="0 0 24 24" className="mb-1  mt-2">
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>{" "}
              Notifiche
            </Nav.Link>
            <NavDropdown
              title={
                <div className="d-flex align-items-center mt-2">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Image} alt="Profile" className="rounded-circle mb-1" width="24" height="20" />
                    <span className="">
                      Tu <BiCaretDown />
                    </span>
                  </div>
                </div>
              }
              id="nav-dropdown-tu"
              align="end"
              className="dropdown"
            >
              <NavDropdown.Item href="#business1">Opzione 1</NavDropdown.Item>
              <NavDropdown.Item href="#business2">Opzione 2</NavDropdown.Item>
              <NavDropdown.Item href="#business3">Opzione 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#more">Scopri di più</NavDropdown.Item>
            </NavDropdown>
            <div className="nav-divider ms-5"></div>
            <NavDropdown
              title={
                <div className="d-flex align-items-center mt-2">
                  <div className="d-flex flex-column align-items-center">
                    <FaTh size={20} />
                    <span className="mt-1">
                      Per le aziende <BiCaretDown />
                    </span>
                  </div>
                </div>
              }
              id="nav-dropdown-tu"
              align="end"
              className="dropdown"
            >
              <NavDropdown.Item href="#business1">Opzione 1</NavDropdown.Item>
              <NavDropdown.Item href="#business2">Opzione 2</NavDropdown.Item>
              <NavDropdown.Item href="#business3">Opzione 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#more">Scopri di più</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="ms-4 prova-premium mt-2 ">
              Prova Premium per 0 <br /> EUR
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
