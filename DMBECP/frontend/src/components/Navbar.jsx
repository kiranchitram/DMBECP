import { Link } from "react-router-dom";
import "../styles/App.css";

function Navbar() {
  return (
    <header className="home-header">
      {/* App Logo */}
      <Link to="/" className="app-logo">🛒 Ecommerce</Link>

      {/* Navigation Links */}
      <nav className="home-navbar">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/customer">Cart</Link>
        <Link to="/help">Helpp</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
