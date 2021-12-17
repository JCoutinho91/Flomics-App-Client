import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditSamples from "../../../components/editSamples/editSamples";
import "./AdminEditSamples.css"
const urlRequests = "http://localhost:5005/api/results/";

function AdminEditSamples() {
  const [sample, setSample] = useState(null);
  const { sampleId } = useParams();

  useEffect(() => {
    axios.get(urlRequests + sampleId).then((response) => {
      const currentSample = response.data;
      setSample(currentSample);
    });
  }, []);
  return (
    <div className="samplesDiv">
      <EditSamples />
    </div>
  );
}

export default AdminEditSamples;
