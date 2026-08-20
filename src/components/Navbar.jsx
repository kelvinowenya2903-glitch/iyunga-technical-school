import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>

      <div className="nav-brand">
        <img src={logo} alt="Iyunga Technical School Logo" />
        <h2>Iyunga Technical School</h2>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/Register">register</Link>
        <Link to="/staff-login">Admin</Link>
      </div>

    </nav>
  );
}

export default Navbar;