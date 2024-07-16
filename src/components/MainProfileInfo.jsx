import { Card, Image } from "react-bootstrap";
import { CameraFill, Pencil, ShieldCheck } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const MainProfileInfo = () => {
  const singleUserInfo = useSelector((state) => state.users.singleUser);

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
                top: "20px",
                right: "20px",
                cursor: "pointer",
              }}
            >
              <CameraFill className="z-1 position-absolute light-blue" />
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

            <div className="dashed-border-button d-inline-flex align-items-center rounded-pill ms-3">
              <ShieldCheck className="me-1" fill="currentColor" /> Verifica ora
            </div>
            <Card.Text>{singleUserInfo.title}</Card.Text>
            <Card.Text className="lead d-inline-block">{singleUserInfo.area}</Card.Text>
            <span className="light-blue ms-3">informazioni di contatto</span>
            <Card.Text className="light-blue">X collegamenti</Card.Text>
            <div className="blue-button d-inline-block rounded-pill ">Disponibile per</div>
            <div className="light-blue-button d-inline-block rounded-pill ms-2">Aggiungi sezione del profilo</div>
            <div className="light-blue-button d-inline-block rounded-pill ms-2">Migliora profilo</div>
            <div className="black-button d-inline-block rounded-pill ms-2">Altro</div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MainProfileInfo;
