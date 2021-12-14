import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import AddRequest from "../../components/addRequest/addRequest";
import "./RequestsPage.css";

const API_URL = "http://localhost:5005/api/users/current";
function RequestsPage() {
  const [requestList, setRequestList] = useState([]);

  const getAllRequests = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const currentUser = response.data;
        const currentUserRequests = currentUser.requests;
        console.log("currentUser", currentUser);
        setRequestList(currentUserRequests);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRequests();
  }, []);

  return (
    <div className="Analysis">
      <h1>Hello</h1>
      {requestList.map((el) => {
        return (
          <div className="requests list">
            <h1>{el.name}</h1>
            <h3>{el.size}</h3>
            <p>{el.status}</p>
            <p>{el.variants}</p>
            <p>{el.observations}</p>
            <br />
          </div>
        );
      })}
      <AddRequest refreshList={getAllRequests} />
    </div>
  );
}

export default RequestsPage;
