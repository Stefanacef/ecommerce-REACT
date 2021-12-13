import "./header.styles.scss";
import logoImg from "../../assets/logo.png";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <Link className="logo-container" to="/">
        <img src={logoImg} alt="logo image" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};
export default Header;
