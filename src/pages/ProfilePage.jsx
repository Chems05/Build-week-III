import Footer from "../components/Footer";
import Activity from "../components/Activity";
import MyNavbar from "../components/MyNavbar";
import MainProfileInfo from "../components/MainProfileInfo";

const ProfilePage = () => {
  return (
    <div style={{ color: "grey" }}>
      <MyNavbar />
      <MainProfileInfo />
      <Activity />
      <Footer />
    </div>
  );
};

export default ProfilePage;
