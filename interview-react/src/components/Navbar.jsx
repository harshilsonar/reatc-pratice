import { Link } from "react-router-dom";
// import logo from "../assets/jwellery.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/jwellery.png" alt="Jewellery Logo" height={"10px"}/>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rings">Rings</Link></li>
        <li><Link to="/earrings">Earrings</Link></li>
        <li><Link to="/necklaces">Necklaces</Link></li>
        <li><Link to="/collections">Collections</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-icons">
        <button>🔍</button>
        <button>🤍</button>
        <button>🛒</button>
        <Link to="/signin">
          <button className="signin-btn">Sign In</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;