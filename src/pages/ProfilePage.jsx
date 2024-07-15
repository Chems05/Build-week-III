import Footer from "../components/Footer";
import Activity from "../components/Activity";
import MainProfileInfo from "../components/MainProfileInfo";
import MyNavbar from "../components/MyNavbar";
import ProfileInfo from "../components/ProfileInfo";

const ProfilePage = () => {
  return (
    <div>
      <MyNavbar />
      <MainProfileInfo />
      <ProfileInfo />
      <Footer />
      <Activity />
      <Footer />
    </div>
  );
};

export default ProfilePage;
