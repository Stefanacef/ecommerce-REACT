import "./header.styles.scss";
import logoImg from "../../assets/logo.png";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <nav className="header">
      <Link className="logo-container" to="/">
        <img src={logoImg} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Header;
