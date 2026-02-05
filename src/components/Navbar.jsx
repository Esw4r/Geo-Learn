import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Dashboard</Link>
        <Link to="/training">Learning</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/test">Test</Link>
      </div>

      {/* RIGHT SIDE BRAND */}
      <div className="nav-right">
        <span className="brand">🌏GeoLearn</span>
      </div>
    </nav>
  );
}
