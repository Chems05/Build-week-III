import Footer from "../components/Footer";
import Activity from "../components/Activity";
import MainProfileInfo from "../components/MainProfileInfo";
import MyNavbar from "../components/MyNavbar";

const ProfilePage = () => {
  return (
    <div>
      <MyNavbar />
      <MainProfileInfo />
      <Footer />
      <Activity />
      <Footer />
    </div>
  );
};

export default ProfilePage;
