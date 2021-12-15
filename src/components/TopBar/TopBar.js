import "./TopBar.css";
import { Link } from "react-router-dom";
import companyLogo from "../../assests/flologo.png";
import { Settings, Chat, Notifications  } from "@material-ui/icons";
import {useState, useEffect} from "react"
import axios from "axios"
const API_URL = "http://localhost:5005/api/users/current";

function TopBar() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");


     useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          const currentUser = response.data;
          setEmail(currentUser.name);
          setName(currentUser.email);
          setImage(currentUser.image);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <Link to="/">
          
            <span className="logo">
              <img className="logoimg" src={companyLogo} alt="flologo" />
            </span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications/>
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Chat/>
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
              <Settings/>
          </div>
          <Link to="/profile"><img src={image} alt="userimg" className="topavatar" /></Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;