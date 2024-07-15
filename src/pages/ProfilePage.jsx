import Footer from "../components/Footer";
import Activity from "../components/Activity";
import MainProfileInfo from "../components/MainProfileInfo";
import MyNavbar from "../components/MyNavbar";
import ProfileInfo from "../components/ProfileInfo";
import Informazioni from "../components/Informazioni";
import Competenze from "../components/Competenze";

const ProfilePage = () => {
  return (
    <div>
      <MyNavbar />
      <MainProfileInfo />
      <ProfileInfo />
      <Informazioni />
      <Competenze />
      <Activity />
      <Footer />
    </div>
  );
};

export default ProfilePage;
