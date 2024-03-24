import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/navbar/navbar";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contactus/contactus";
import Projects from "./pages/projects/projects";
import Services from "./pages/services/services";
import Footer from "./common/footer/footer";
import "./fonts/CeraPro-Black.ttf"
import "./fonts/CeraPro-BlackItalic.ttf"
import "./fonts/CeraPro-Bold.ttf"
import "./fonts/CeraPro-BoldItalic.ttf"
import "./fonts/CeraPro-Light.ttf"
import "./fonts/CeraPro-LightItalic.ttf"
import "./fonts/CeraPro-Medium.ttf"
import "./fonts/CeraPro-MediumItalic.ttf"
import "./fonts/CeraPro-Regular.ttf"
import "./fonts/CeraPro-RegularItalic.ttf"
import "./fonts/CeraPro-Thin.ttf"
import "./fonts/CeraPro-ThinItalic.ttf"

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
      <Footer/>
    </>
  );
}

export default App;
