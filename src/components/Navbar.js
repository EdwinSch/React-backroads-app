import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data.js";

const Navbar = () => {
  return (
    // Navbar header
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* navbar links */}
        <ul className="nav-links" id="nav-links">
          {/* Map Links */}
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        {/* socialmedia icon links */}
        <ul className="nav-icons">
          {/* map social icons */}
          {socialLinks.map((link) => {
            // destructure
            const { id, href, icon } = link;
            //return
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
