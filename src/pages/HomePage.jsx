import { Container } from "react-bootstrap";
import CreatePost from "../components/CreatePost";
import MyNavbar from "../components/MyNavbar";

const HomePage = () => {
  return (
    <>
      <MyNavbar />

      <Container>
        <CreatePost />
      </Container>
    </>
  );
};

export default HomePage;
