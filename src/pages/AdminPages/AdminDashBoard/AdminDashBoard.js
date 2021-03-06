import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../../components/TopBar/TopBar";
import "./AdminDashBoard.css"
const urlRequests = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
const urlSamples = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
const urlUsers = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function AdminDashBoard() {
  const [userRequests, setUserRequests] = useState([]);
  const [userSamples, setUserSamples] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`${urlRequests}/api/requests`).then((response) => {
        const requestsData = response.data;
        console.log(requestsData)

        setUserRequests(requestsData);
      });
      axios.get(`${urlRequests}/api/results`).then((response) => {
        const samplesData = response.data;
        setUserSamples(samplesData);
      });
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        const response = await axios.get(`${urlUsers}/api/users`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const allUsers = response.data;
        console.log("allUsers", allUsers);
        setUsers(allUsers);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <TopBar/>
    <div className="AdminList">
      <div className="Requests">
      <h2>Requests List:</h2>
        {userRequests.map((el) => (
          <div className="requestitem">
            <div className="companyName">
            <h3>{el.name}</h3>
            </div>
              <div className="companyinfo">
              <p>Sample Size <br /> <span className="p__value">{el.size}</span></p>
              <p>Current Status<br /><span className="p__value">{el.status}</span></p>
              <p>Found Variant<br /><span className="p__value">{el.variants}</span></p>
              <p>Notes<br /><span className="p__value">{el.observations}</span></p>
            </div>
            <button className="editbtn">
            <Link to={`/admindashboard/requests/${el._id}`}>Edit</Link>
            </button>
            </div>
        ))}
      </div>
      <div className="Samples">
      <h2>Samples:</h2>
      <br/>
        {userSamples.map((el) => (
          <>
            <li><b>Sample ID : </b>{el.sampleId}</li>
            <li><b>Company : </b>{el.company}</li>
            <li><b>Date : </b>{el.date}</li>
            <li><b>Beta : </b>{el.Beta}</li>
            <li><b>Gamma : </b>{el.Gamma}</li>
            <li><b>Kappa : </b>{el.Kappa}</li>
            <li><b>Delta : </b>{el.Delta}</li>
            <li><b>Alpha : </b>{el.Alpha}</li>
            <li><b>Lambda : </b>{el.Lambda}</li>
            <li><b>Mu : </b>{el.Mu}</li>
            <li><b>Omicron :</b> {el.Omicron}</li>
            <br />
            <button className="editbtn">
              {" "}
              <Link to={`/admindashboard/samples/${el._id}`}>Edit</Link>
            </button>
          </>
        ))}
      </div>
      <div className="userdata">
      <ul>
       <h2>Users:</h2>
       <br/>
        {users.map((el) => (
          <>
            <li><b>Username :</b> {el.name}</li>
            <br/>
            <li><b>Email Contact :</b> {el.email}</li>
            <br/>
            <button className="editbtn">
              {" "}
              <Link to={`/admindashboard/users/${el._id}`}>Add Results to User</Link>
            </button>
            <br />
          </>
        ))}
      </ul>
      </div>
      </div>
      </>


  )
}

export default AdminDashBoard;
