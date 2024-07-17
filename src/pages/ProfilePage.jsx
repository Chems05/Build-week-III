import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import MainProfileInfo from "../components/MainProfileInfo";
import FixedTopBar from "../components/FixedTopBar"; // Import the FixedTopBar component

import Activity from "../components/Activity";
import Resource from "../components/Resource";
import Footer from "../components/Footer";
import Informazioni from "../components/Informazioni";
import Analytics from "../components/Analytics";
import Competenze from "../components/Competenze";
import ProfileInfo from "../components/ProfileInfo";
import Esperienza from "../components/Esperienza";

const ProfilePage = () => {
  const [showFixedBar, setShowFixedBar] = useState(false);
  const mainProfileRef = useRef(null);

  const handleScroll = () => {
    if (mainProfileRef.current) {
      const mainProfileTop = mainProfileRef.current.getBoundingClientRect().top;
      setShowFixedBar(mainProfileTop < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <MyNavbar />
      <FixedTopBar show={showFixedBar} />
      <Container className="mt-4">
        <Row>
          <Col md={8} ref={mainProfileRef}>
            <MainProfileInfo />
            <Analytics />
            <Resource />
            <Informazioni />
            <Activity />
           
         
          
            <Esperienza />
            <Competenze />
          </Col>
          <Col md={4}>
            <ProfileInfo />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default ProfilePage;
