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
          <Route path="/home" element={<ProfilePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<JobsPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
