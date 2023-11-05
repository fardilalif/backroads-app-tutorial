import { socialLinks } from "../data.js";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks.js";
import SocialLink from "./SocialLink.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink link={link} itemClass="nav-icon" key={link.id} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
