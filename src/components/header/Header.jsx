import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../../assets/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header ">
      <div className="header-wrapper global-max-width">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
          </NavLink>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
