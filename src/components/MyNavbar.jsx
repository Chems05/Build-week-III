import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { FaTh } from "react-icons/fa";
import {
  BsFillPlayBtnFill,
  BsFillPostcardFill,
  BsLinkedin,
  BsPlusLg,
} from "react-icons/bs";
import "../assets/mynavbar.css";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import {
  BrowserSafari,
  Check,
  FileBarGraph,
  PeopleFill,
  SquareFill,
} from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllUsersInformations,
  getUserExperiences,
  getUserInformation,
} from "../redux/actions";
import { getAllPosts } from "../redux/actions/postsActions";

import { Link } from "react-router-dom";

const MyNavbar = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInformation());
    dispatch(getAllUsersInformations());

    dispatch(getAllPosts());
  }, []);

  //useffect con il ruolo di componentDidUpdate che fetcha le xperiences solo quandi otteniamo l'id dell'utente nella fetch che viene
  //eseguita al montaggio della pagina
  useEffect(() => {
    //eseguirà la fetch solo quando singleUserInfo!== da null e
    if (singleUserInfo) {
      dispatch(getUserExperiences(singleUserInfo._id));
    }
  }, []);

  return (
    <Navbar bg="white" variant="light" expand="lg" className="px-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <BsLinkedin size={33} className="ms-2 " color="#0077b5" />
          <BiSearch size={25} color="grey" className="ms-2 d-md-none  " />
        </Navbar.Brand>
        <Form className="d-flex mx-2 search-form d-none d-xl-block">
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

        <Nav.Link
          href="#home"
          className="d-flex flex-column align-items-center ms-5"
        >
          <Link to="/">
            <svg
              width="24"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="mb-1  mt-2"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
            </svg>
          </Link>
          <span className="d-none d-md-block"> Home </span>
        </Nav.Link>
        <Nav.Link
          href="#network"
          className="d-flex flex-column align-items-center"
        >
          <svg
            width="24"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mb-1 mx- mt-2"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>{" "}
          <span className="d-none d-md-block"> Rete </span>
        </Nav.Link>
        <Nav.Link
          href="#jobs"
          className="d-flex flex-column align-items-center"
        >
          <Link to="/jobs">
            <svg
              width="24"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="mb-1 mx- mt-2"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
          </Link>{" "}
          <span className="d-none d-md-block"> Lavoro</span>
        </Nav.Link>
        <Nav.Link
          href="#messaging"
          className="d-flex flex-column align-items-center d-xs-none "
        >
          <svg
            width="24"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mb-1 mx- mt-2 "
          >
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
          </svg>{" "}
          <span className="d-none d-md-block"> Messaggistica </span>
        </Nav.Link>
        <Nav.Link
          href="#notifications"
          className="d-flex flex-column align-items-center me-2"
        >
          <svg
            width="24"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mb-1  mt-2"
          >
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
          </svg>{" "}
          <span className="d-none d-md-block"> Notifiche </span>
        </Nav.Link>
        <NavDropdown
          title={
            <div className="d-flex align-items-center mt-2 dropdown2">
              <div className="d-flex flex-column align-items-center">
                {singleUserInfo && (
                  <img
                    src={singleUserInfo.image}
                    alt="Profile"
                    className="rounded-circle mb-1"
                    width="24"
                    height="22"
                  />
                )}
                <span className="d-none d-md-block">
                  Tu <BiCaretDown />
                </span>
              </div>
            </div>
          }
          id="nav-dropdown-tu"
          align="end"
          className="small-dropdown"
        >
          <NavDropdown.Item href="#business1">
            <div className="d-flex align-items-center">
              {singleUserInfo && (
                <img
                  src={singleUserInfo.image}
                  alt="imamgine"
                  className="rounded-circle mr-2 mb-5"
                  width="29"
                  height="29"
                />
              )}
              <div>
                {singleUserInfo && (
                  <>
                    <div>
                      <strong>
                        {singleUserInfo.name}&nbsp;
                        {singleUserInfo.surname}
                      </strong>
                    </div>
                    <div className="small text-muted">
                      {singleUserInfo.title}
                    </div>
                  </>
                )}
                <Link to="/Profile">
                  <Button
                    style={{ width: "180px ", fontSize: "12px" }}
                    className="btn bottone border-primary bg-white text-primary mt-2  "
                  >
                    Visualizza profilo
                  </Button>
                </Link>
              </div>
            </div>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#business2">
            <h5>Account</h5>
          </NavDropdown.Item>
          <NavDropdown.Item href="#business3">
            <h7 className="testo-piccolo ">
              <SquareFill style={{ color: "#b37d00" }} />
              Prova 1 mese di Premium per 0 <br /> EUR
            </h7>
          </NavDropdown.Item>
          <NavDropdown.Item href="#business3">
            <h7 className="testo-piccolo">Impostazioni e privacy </h7>
          </NavDropdown.Item>
          <NavDropdown.Item href="#business3">
            <h7 className="testo-piccolo">Guida </h7>
          </NavDropdown.Item>
          <NavDropdown.Item href="#business3">
            <h7 className="testo-piccolo">Lingua</h7>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#business2">
            <h5>Gestisci</h5>
          </NavDropdown.Item>
          <NavDropdown.Item href="#business3">
            <h7 className="testo-piccolo">Post e attività </h7>
          </NavDropdown.Item>
          <NavDropdown.Item href="#business3">
            <h7 className="testo-piccolo">
              Account per la pubblicazione di off...{" "}
            </h7>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#business3">
            <h7 className="testo-piccolo">Esci</h7>
          </NavDropdown.Item>
        </NavDropdown>
        <div className="nav-divider ms-5 d-none d-xl-block"></div>
        <NavDropdown
          title={
            <div className="d-flex align-items-center mt-2 d-none d-lg-block">
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
          <div className="d-flex">
            <div className="dropdown-col">
              <div className="section-title mb-2">
                Scopri altri prodotti LinkedIn
              </div>
              <NavDropdown.Item href="#find-clients">
                <BrowserSafari style={{ color: "#0A66C2" }} size={22} /> Trova
                nuovi clienti
              </NavDropdown.Item>
              <NavDropdown.Item href="#groups">
                <PeopleFill style={{ color: "#0A66C2" }} size={22} /> Gruppi
              </NavDropdown.Item>
              <div className="section-title">Talent</div>
              <NavDropdown.Item href="#talent-insights">
                <FileBarGraph style={{ color: "#0A66C2" }} size={22} /> Talent
                Insights
              </NavDropdown.Item>
              <NavDropdown.Item href="#post-job">
                <BsFillPostcardFill style={{ color: "#0A66C2" }} size={22} />{" "}
                Pubblica un’offerta di lavoro
              </NavDropdown.Item>
              <div className="section-title">Vendite</div>
              <NavDropdown.Item href="#service-marketplace">
                <Check style={{ color: "#0A66C2" }} size={24} /> Marketplace dei
                servizi
              </NavDropdown.Item>

              <div className="section-title">Marketing</div>
              <NavDropdown.Item href="#advertise">
                <svg
                  fill="#0A66C2"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 459.428 459.428"
                  className="iconsarrow"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M349.792,157.708l-19.856,19.856c9.316,17.136,14.62,36.652,14.62,57.459c0,66.232-53.924,120.156-120.156,120.156 s-120.156-53.924-120.156-120.156c0-66.232,53.924-120.156,120.156-120.156c20.808,0,40.324,5.304,57.459,14.62l19.856-19.856 c-22.508-13.94-48.96-21.964-77.316-21.964c-81.26,0-147.356,66.096-147.356,147.356S143.14,382.38,224.4,382.38 s147.356-66.096,147.356-147.355C371.756,206.669,363.731,180.217,349.792,157.708z M294.644,212.925l-23.868,23.801 c-0.884,24.887-21.283,44.742-46.375,44.742c-25.636,0-46.444-20.807-46.444-46.443c0-25.092,19.856-45.492,44.744-46.375 l23.868-23.8c-7.004-2.244-14.416-3.468-22.167-3.468c-40.596,0-73.644,33.048-73.644,73.644s33.048,73.645,73.644,73.645 s73.644-33.049,73.644-73.645C298.044,227.34,296.888,219.861,294.644,212.925z M416.771,119.629l-19.855,19.856 c15.708,28.288,24.684,60.86,24.684,95.54c0,108.732-88.468,197.201-197.2,197.201S27.2,343.757,27.2,235.024 c0-108.732,88.468-197.2,197.2-197.2c34.68,0,67.251,8.976,95.54,24.684l19.856-19.856C306.067,22.321,266.56,10.625,224.4,10.625 C100.64,10.625,0,111.265,0,235.024s100.64,224.4,224.4,224.4s224.4-100.641,224.4-224.4 C448.8,192.865,437.104,153.357,416.771,119.629z M387.301,120.207l-25.963-2.883L233.431,245.226 c-5.311,5.311-13.92,5.311-19.231,0c-5.311-5.312-5.311-13.92,0-19.231L342.101,98.093l-2.883-25.962l72.128-72.128l9.615,38.468 l38.467,9.615L387.301,120.207z"></path>
                    </g>
                  </g>
                </svg>{" "}
                Pubblicizza
              </NavDropdown.Item>
              <div className="section-title">Learning</div>
              <NavDropdown.Item href="#learning">
                <BsFillPlayBtnFill style={{ color: "#0A66C2" }} size={22} />{" "}
                Learning
              </NavDropdown.Item>
            </div>
            <div className="nav-dividers"></div>
            <div className="dropdown-col">
              <div className="section-title mb-2">
                Scopri altro per il business
              </div>
              <NavDropdown.Item href="#hire-linkedin">
                Assumi su LinkedIn
                <br />
                Trova, attrai e assumi
              </NavDropdown.Item>
              <NavDropdown.Item href="#sell-linkedin">
                Vendi con LinkedIn
                <br />
                Sblocca nuove opportunità di vendita
              </NavDropdown.Item>
              <NavDropdown.Item href="#free-job-posting">
                Offerta di lavoro gratuita
                <br />
                Ottieni rapidamente candidati qualificati
              </NavDropdown.Item>
              <NavDropdown.Item href="#advertise-linkedin">
                Fai pubblicità su LinkedIn
                <br />
                Acquisisci clienti e fai crescere la tua azienda
              </NavDropdown.Item>
              <NavDropdown.Item href="#learn-linkedin">
                Impara con LinkedIn
                <br />
                Assumi su LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href="#admin-center">
                Admin Center
                <br />
                Gestisci i dettagli di fatturazione e account
              </NavDropdown.Item>
              <NavDropdown.Item href="#create-page">
                Crea una pagina aziendale <BsPlusLg />
              </NavDropdown.Item>
            </div>
          </div>
        </NavDropdown>

        <Nav.Link className="ms-4 prova-premium mt-2 d-none d-xl-block">
          Prova Premium per 0 <br /> EUR
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
