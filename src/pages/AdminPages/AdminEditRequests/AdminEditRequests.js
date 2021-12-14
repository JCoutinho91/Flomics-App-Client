import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import EditRequest from "../../../components/editRequest/editRequest";
const urlRequests = "http://localhost:5005/api/requests/";

function AdminEditRequests() {
  const [request, setRequest] = useState(null);

  const { requestId } = useParams();

  useEffect(() => {
    axios.get(urlRequests + requestId).then((response) => {
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
        </>
      )}
      <EditRequest />
    </div>
  );
}

export default AdminEditRequests;
