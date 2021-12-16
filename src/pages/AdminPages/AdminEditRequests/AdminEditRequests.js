import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditRequest from "../../../components/editRequest/editRequest";
const urlRequests = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
const urlDelete =  process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function AdminEditRequests() {
  const [request, setRequest] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const { requestId } = useParams();

   const navigate = useNavigate();

  const handleDelete = async (requestId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.delete( `${urlDelete}/api/requests/` + requestId,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
    )
    setDeleted(!deleted);
    navigate(-1);
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
    <div>
      {request && (
        <>
          <h1>{request.name}</h1>
          <p>{request.size}</p>
          <p>{request.variants}</p>
          <p>{request.status}</p>
          <p>{request.observations}</p>
        <button onClick={() => handleDelete(request._id)}>
                Delete </button>
        </>
      )}
      <EditRequest />
    </div>
  );
}

export default AdminEditRequests;
