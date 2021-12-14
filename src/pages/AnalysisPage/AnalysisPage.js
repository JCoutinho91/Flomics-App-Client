import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005/api/users/current";

function AnalysisPage(props) {
  const [userSamples, setUserSamples] = useState([]);
  // const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          const currentUser = response.data;
          const currentUserSamples = currentUser.samples;
          console.log("currentUserSamples", currentUserSamples);
          setUserSamples(currentUserSamples);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="Analysis">
      <h1>Hello</h1>
      {console.log(userSamples)}
      {userSamples.map((el) => {
        return (
          <div>
            <h1>{el.sampleId}</h1>
            <h3>{el.Beta}</h3>
            <p>{el.Mu}</p>
            <p>{el.Omicron}</p>
            <p>{el.Delta}</p>
            <p>{el.Lambda}</p>
            <p>{el.Gamma}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default AnalysisPage;
