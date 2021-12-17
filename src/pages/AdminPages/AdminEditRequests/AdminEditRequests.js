import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AdminEditRequests.css"
import { useEffect, useState } from "react";
import EditRequest from "../../../components/editRequest/editRequest";
const urlRequests = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function AdminEditRequests() {
  const [request, setRequest] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const { requestId } = useParams();

   const navigate = useNavigate();

  const handleDelete = async (requestId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.delete( `${urlRequests}/api/requests/` + requestId,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
    )
    setDeleted(!deleted);
    navigate("/admindashboard");
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    axios.get(`${urlRequests}/api/requests/` + requestId).then((response) => {
      const currentRequest = response.data;
      setRequest(currentRequest);
    });
  }, []);
  
  return (
    <div className="buttondiv">
      {request && (
     <>
      <EditRequest />
        <button className="button" onClick={() => handleDelete(request._id)}>
                Delete </button>
                </>
      )}
    </div>
  );
}

export default AdminEditRequests;
