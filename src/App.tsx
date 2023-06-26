import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Press from "./pages/Press";
import Community from "./pages/Community";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Deleted from "./pages/Deleted";
import Paused from "./pages/Paused";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/community-guidelines" element={<Community />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<Terms />} />
        <Route path="/why-toksot-deleted-my-account" element={<Deleted />} />
        <Route path="/why-toksot-paused-my-account" element={<Paused />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
