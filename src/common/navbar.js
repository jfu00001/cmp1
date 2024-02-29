import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contactus">Contact Us</Link>
    </div>
  );
};
export default Navbar;
