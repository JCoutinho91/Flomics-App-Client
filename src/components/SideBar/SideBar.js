import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  BarChart,
  ChatBubbleOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Home</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Compare Variant by Country</h3>
          <ul className="sidebarList">
            <Link to="/alpha">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Alpha
            </li>
            </Link>
             <Link to="/beta">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Beta
            </li>
            </Link>
            <Link to="/delta" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                 Delta
              </li>
            </Link>
            <Link to="/lambda">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Lambda
            </li>
            </Link>
             <Link to="/gamma">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Gamma
            </li>
            </Link>
             <Link to="/kappa">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
               Kappa
            </li>
            </Link>
            <Link to="/mu">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Mu
            </li>
            </Link>
            <Link to="/omicron" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Omicron
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Your Lab</h3>
          <ul className="sidebarList">
            
            <Link to="/results">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Lab Results
            </li>
            </Link>
            <Link to="/requests">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Requests
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/variant" className="link">
        
            </Link>

          </ul>
        </div>
        
      </div>
    </div>
  );
}