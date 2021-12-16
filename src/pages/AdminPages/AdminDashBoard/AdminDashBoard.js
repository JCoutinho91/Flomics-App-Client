import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../../components/TopBar/TopBar";
const urlRequests = "http://localhost:5005/api/requests";
const urlSamples = "http://localhost:5005/api/results";
const urlUsers = "http://localhost:5005/api/users";

function AdminDashBoard() {
  const [userRequests, setUserRequests] = useState([]);
  const [userSamples, setUserSamples] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(urlRequests).then((response) => {
        const requestsData = response.data;
        console.log(requestsData)

        setUserRequests(requestsData);
      });
      axios.get(urlSamples).then((response) => {
        const samplesData = response.data;
        setUserSamples(samplesData);
      });
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        const response = await axios.get(urlUsers, {
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
    <div>
    <TopBar/>
      <h1>User Requests:</h1>
      <br />
      <ul>
        {userRequests.map((el) => (
          <>
            <button>
              {" "}
              <Link to={`/admindashboard/requests/${el._id}`}>Edit</Link>
            </button>
            <li>Name of Company : {el.name}</li>
            <li>Size of Sample : {el.size}</li>
            <li>Status : {el.status}</li>
            <li>Variants : {el.variants}</li>
            <li>Observations : {el.observations}</li>
            <br />
            <br />
            <br />
          </>
        ))}
      </ul>
      <hr />
      <h1>User Samples:</h1>
      <ul>
        {userSamples.map((el) => (
          <>
            <button>
              {" "}
              <Link to={`/admindashboard/samples/${el._id}`}>Edit</Link>
            </button>
            <li>Sample ID : {el.sampleId}</li>
            <li>Company : {el.company}</li>
            <li>Date : {el.date}</li>
            <li>Beta : {el.Beta}</li>
            <li>Gamma : {el.Gamma}</li>
            <li>Kappa : {el.Kappa}</li>
            <li>Delta : {el.Delta}</li>
            <li>Alpha : {el.Alpha}</li>
            <li>Lambda : {el.Lambda}</li>
            <li>Mu : {el.Mu}</li>
            <li>Omicron : {el.Omicron}</li>
            <br />
            <br />
            <br />
          </>
        ))}
      </ul>
      <ul>
        {users.map((el) => (
          <>
            <button>
              {" "}
              <Link to={`/admindashboard/samples/${el._id}`}>Edit</Link>
            </button>
            <li>Sample ID : {el.email}</li>
            <li>
              Company : <img src={el.image} alt="userphoto" />
            </li>
            <li>Date : {el.name}</li>
            <br />
            <br />
            <br />
          </>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashBoard;
