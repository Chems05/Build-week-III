import { useState, useEffect } from "react";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

const MiddlePage = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const searchedJobsArray = useSelector((state) => state.search.jobsSearchedArray);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  useEffect(() => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        const filteredJobs = data.data.filter((job) => job.company_logo_url);
        setJobs(filteredJobs);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {searchedJobsArray.length === 0 && (
        <Row>
          <Col>
            <Card style={{ fontSize: "14px" }} className="mb-3">
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Le principali offerte di lavoro per te</Card.Title>
                <Card.Subtitle style={{ fontSize: "14px" }} className="mb-4 text-muted">
                  Sulla base del tuo profilo e della tua cronologia delle ricerche
                </Card.Subtitle>
                <ListGroup variant="flush">
                  {(showAll ? jobs.slice(0, 30) : jobs.slice(0, 3)).map((job) => (
                    <ListGroup.Item key={job._id}>
                      <Row>
                        <Col xs={2}>
                          <img
                            src={job.company_logo_url || "https://via.placeholder.com/50"}
                            alt="Company Logo"
                            className="img-fluid"
                          />
                        </Col>
                        <Col xs={8}>
                          <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <strong>{job.title}</strong>
                          </a>
                          <h6>{job.company_name}</h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            {job.candidate_required_location}
                          </h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            {job.category}
                          </h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            {job.job_type}
                          </h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              data-supported-dps="24x24"
                              fill="green"
                              width="24"
                              height="24"
                              focusable="false"
                            >
                              <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
                            </svg>{" "}
                            Selezione attiva
                          </h6>
                          <p className="text-muted mt-4">Pubblicato il: {formatDate(job.publication_date)}</p>
                        </Col>
                        <Col xs={2} className="text-end">
                          <Button variant="text-secondary" size="lg" className="p-0">
                            <i className="bi bi-x"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <hr />
                {!showAll && (
                  <Button
                    style={{ marginLeft: "35%" }}
                    className="mt-3 bg-transparent border-0 text-secondary "
                    onClick={handleShowAllClick}
                  >
                    Mostra tutto →
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {searchedJobsArray.length !== 0 && (
        <Row>
          <Col>
            <Card style={{ fontSize: "14px" }} className="mb-3">
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>
                  Offerte di lavoro cercate: <strong>{searchQuery}</strong>
                </Card.Title>

                <ListGroup variant="flush">
                  {(showAll ? searchedJobsArray.slice(0, 30) : searchedJobsArray.slice(0, 3)).map((job) => (
                    <ListGroup.Item key={job._id}>
                      <Row>
                        <Col xs={2}>
                          <img
                            src={job.company_logo_url || "https://via.placeholder.com/50"}
                            alt="Company Logo"
                            className="img-fluid"
                          />
                        </Col>
                        <Col xs={8}>
                          <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <strong>{job.title}</strong>
                          </a>
                          <h6>{job.company_name}</h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            {job.candidate_required_location}
                          </h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            {job.category}
                          </h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            {job.job_type}
                          </h6>
                          <h6 style={{ fontSize: "14px" }} className="text-muted">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              data-supported-dps="24x24"
                              fill="green"
                              width="24"
                              height="24"
                              focusable="false"
                            >
                              <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
                            </svg>{" "}
                            Selezione attiva
                          </h6>
                          <p className="text-muted mt-4">Pubblicato il: {formatDate(job.publication_date)}</p>
                        </Col>
                        <Col xs={2} className="text-end">
                          <Button variant="text-secondary" size="lg" className="p-0">
                            <i className="bi bi-x"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <hr />
                {!showAll && (
                  <Button
                    style={{ marginLeft: "35%" }}
                    className="mt-3 bg-transparent border-0 text-secondary "
                    onClick={handleShowAllClick}
                  >
                    Mostra tutto →
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MiddlePage;
