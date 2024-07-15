import Footer from "../components/Footer";
import Activity from "../components/Activity";
import MyNavbar from "../components/MyNavbar";
import MainProfileInfo from "../components/MainProfileInfo";

const ProfilePage = () => {
  return (
    <div>
      <MyNavbar />
      <MainProfileInfo />
      <Activity />
      <Footer />
    </div>
  );
};

export default ProfilePage;
