import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function AddRequest({ refreshList }) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [size, setSize] = useState(1);
  const [variant, setVariant] = useState("");
  const [observations, setObservations] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handleVariant = (e) => setVariant(e.target.value);
  const handleObs = (e) => setObservations(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const requestBody = {
        name,
        size,
        variant,
        observations,
        userIdentify: user._id,
      };
      const authToken = localStorage.getItem("authToken");
      await axios.post(`${API_URL}/api/request/new`, requestBody, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      // Clear the form
      setName("");
      setSize("");
      setVariant("");
      setObservations("");
      refreshList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddProject">
      <h3>New Request</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="title" type="text" value={name} onChange={handleName} />
        <label>Size</label>
        <input name="size" type="text" value={size} onChange={handleSize} />
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
          onChange={handleObs}
        />

        <button type="submit">Add Request</button>
      </form>
    </div>
  );
}

export default AddRequest;
