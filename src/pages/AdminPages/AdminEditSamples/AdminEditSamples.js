import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import EditSamples from "../../../components/editSamples/editSamples";
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
    <div>
      {sample && (
        <>
          <h1>{sample.sampleId}</h1>
          <p>{sample.company}</p>
          <p>{sample.date}</p>
          <p>{sample.Beta}</p>
          <p>{sample.Gamma}</p>
          <p>{sample.Kappa}</p>
          <p>{sample.Delta}</p>
          <p>{sample.Alpha}</p>
          <p>{sample.Lambda}</p>
          <p>{sample.Mu}</p>
          <p>{sample.Omicron}</p>
        </>
      )}
      <EditSamples />
    </div>
  );
}

export default AdminEditSamples;
