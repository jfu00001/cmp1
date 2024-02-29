import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/navbar";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contactus/contactus";
import Projects from "./pages/projects/projects";
import Services from "./pages/services/services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
