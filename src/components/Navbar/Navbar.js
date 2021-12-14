import "./Navbar.css";
import { useState } from "react/cjs/react.development";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const navbarLinks = [
  { url: "/login", title: "Login" },
  { url: "/signup", title: "Sign Up" },
  { url: "/learn", title: "Learn More" },
  { url: "/adminlogin", title: "Admin" },
];
const Navbar = ({ logoimg }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span>
        <img className="navbar__logo" src={logoimg} alt="." />{" "}
      </span>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <Link to={item.url} key={index}>
              <li className="navbar__item">
                {" "}
                <p className="navbar__link">{item.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
