import { useState, useEffect } from "react";
import { Card, Image, Modal, Button, Form } from "react-bootstrap";
import { Pencil, ShieldCheck } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { uploadProfileImage } from "../redux/actions";

const MainProfileInfo = () => {
  const dispatch = useDispatch();
  const singleUserInfo = useSelector((state) => state.users.singleUser);
  const loading = useSelector((state) => state.users.loading);
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState(null);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
    }
  };

  const handleImageSave = async () => {
    if (newImage && singleUserInfo) {
      await dispatch(uploadProfileImage(singleUserInfo._id, newImage));
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (singleUserInfo && singleUserInfo.image) {
      setNewImage(null);
    }
  }, [singleUserInfo]);

  return (
    <>
      {singleUserInfo && (
        <Card>
          <div className="position-relative">
            <Card.Img
              variant="top"
              src="https://media.licdn.com/dms/image/C4E16AQF8TC4KCgMDNA/profile-displaybackgroundimage-shrink_350_1400/0/1523715805906?e=1726704000&v=beta&t=wGs6DFrGhY_bDMVESIcstUxHmOmzNXgZTlG5gqy9Jn4"
            />
            <Image
              className="border border-white border-4"
              src={singleUserInfo.image}
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                position: "absolute",
                bottom: "-50px",
                left: "20px",
              }}
            />
            <div
              className="p-3 d-flex justify-content-center align-items-center"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "white",
                borderRadius: "50%",
                position: "absolute",
                bottom: "10px",
                left: "180px",
                cursor: "pointer",
              }}
              onClick={handleModalOpen}
            >
              <Pencil className="z-1 position-absolute light-blue" />
            </div>
          </div>

          <Pencil style={{ cursor: "pointer" }} className="ms-auto me-4 mt-3" fill="currentColor" />
          <Card.Body className="mt-3 ms-2">
            <Card.Title className="d-inline-block">
              <strong>
                {singleUserInfo.name}&nbsp;
                {singleUserInfo.surname}
              </strong>
            </Card.Title>

            <div style={{fontSize:'14px'}} className="dashed-border-button d-inline-flex align-items-center rounded-pill ms-3">
              <ShieldCheck className="me-1" fill="currentColor" /> Verifica ora
            </div>
            <h6 style={{fontSize:'16px', color:'#191919'}} >{singleUserInfo.title}</h6>
            <p style={{fontSize:'15px ',color:'grey'}} className="lead d-inline-block">{singleUserInfo.area} ·</p>
            <span style={{fontSize:'14px'}} className="light-blue ms-1">informazioni di contatto</span>
            <Card.Text style={{fontSize:'14px'}} className="light-blue">250 collegamenti</Card.Text>
            <div style={{fontSize:'17px',height:'30px'}} className="blue-button d-inline-block rounded-pill ">Disponibile per</div>
            <div style={{fontSize:'17px',height:'30px'}}  className="light-blue-button d-inline-block rounded-pill ms-2">Aggiungi sezione del profilo</div>
           
            <div style={{ fontSize: "17px",height:'30px' }} className="black-button d-inline-block rounded-pill ms-2">
              Altro
            </div>
          </Card.Body>
        </Card>
      )}

      <Modal className="mt-5" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Immagine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Seleziona una nuova immagine</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
          </Form>
          {newImage && <Image src={URL.createObjectURL(newImage)} fluid />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleImageSave} disabled={loading}>
            {loading ? "Salvando..." : "Salva"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MainProfileInfo;
