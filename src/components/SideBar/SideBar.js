import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <h4>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="SideBarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <img className="sidebarimg" src="./casa.png" alt="casaicon" />
                Home
              </li>
              <Link to="/analysis">
                <li className="sidebarListItem">
                  <img
                    src="./analytics.png"
                    alt="analyticsicon"
                    className="sidebarimg"
                  />
                  Analytics
                </li>
              </Link>
              <li className="sidebarListItem">
                <img
                  src="./results.png"
                  alt="resultsimg"
                  className="sidebarimg"
                />
                Results
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="SideBarTitle">Navigation</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <img className="sidebarimg" src="./user.png" alt="userimg" />
                Variants Data
              </li>
              <li className="sidebarListItem">
                <img
                  src="./linechart.png"
                  alt="analyticsicon"
                  className="sidebarimg"
                />
                Charts
              </li>
              <li className="sidebarListItem">
                <img src="./balance.png" alt="chatimg" className="sidebarimg" />
                Compare
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="SideBarTitle">Your Laboratory</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <img
                  className="sidebarimg"
                  src="./overview.png"
                  alt="casaicon"
                />
                Overview
              </li>
              <li className="sidebarListItem">
                <img
                  src="./data.png"
                  alt="analyticsicon"
                  className="sidebarimg"
                />
                Data
              </li>
              <li className="sidebarListItem">
                <img
                  src="./graph.png"
                  alt="resultsimg"
                  className="sidebarimg"
                />
                Graphs
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="SideBarTitle">Help</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <img className="sidebarimg" src="FAQ.png" alt="casaicon" />
                FAQS
              </li>
              <li className="sidebarListItem">
                <img
                  src="./support.png"
                  alt="analyticsicon"
                  className="sidebarimg"
                />
                Contact Us
              </li>
              <li className="sidebarListItem">
                <img
                  src="./warning.png"
                  alt="resultsimg"
                  className="sidebarimg"
                />
                Report Issue
              </li>
            </ul>
          </div>
        </div>
      </div>
    </h4>
  );
}

export default SideBar;