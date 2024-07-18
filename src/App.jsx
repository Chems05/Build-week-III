import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
