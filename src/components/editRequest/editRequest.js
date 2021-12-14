import { useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
const requestUrl = "http://localhost:5005/api/requests/";

function EditRequest() {
  const [status, setStatus] = useState("");
  const [variant, setVariant] = useState("");
  const [observations, setObservations] = useState("");

  const { requestId } = useParams();

  const handleStatus = (e) => setStatus(e.target.value);

  const handleVariant = (e) => setVariant(e.target.value);

  const handleObser = (e) => setObservations(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const requestBody = {
        status,
        variant,
        observations,
      };
      await axios.put(requestUrl + requestId, requestBody);

      // Clear the form
      setStatus("");
      setVariant("");
      setObservations("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Edit Request</h3>
      <form onSubmit={handleSubmit}>
        <label>Status</label>
        <input
          name="status"
          type="text"
          value={status}
          onChange={handleStatus}
        />
        <label>Variant</label>
        <input
          name="variant"
          type="text"
          value={variant}
          onChange={handleVariant}
        />
        <label>Observations</label>
        <input
          name="observations"
          type="text"
          value={observations}
          onChange={handleObser}
        />

        <button type="submit">Add Request</button>
      </form>
    </div>
  );
}

export default EditRequest;
