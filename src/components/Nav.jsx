import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { FaRegTimesCircle, FaGripLines } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mobile-nav" onClick={toggleNav}>
        {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
      </div>
      <nav className={`nav ${isOpen ? "active" : ""}`} onClick={toggleNav}>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item">
          Menu
        </a>
        <Link to="/booking" className="nav-item">
          Reservations
        </Link>
        <a href="#" className="nav-item">
          Order Online
        </a>
        <a href="#" className="nav-item">
          Login
        </a>
      </nav>
    </>
  );
}
