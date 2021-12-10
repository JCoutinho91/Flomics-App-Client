import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005/api/users/current";

function EditProjectPage(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          const currentUser = response.data;
          console.log(currentUser);
          setEmail(currentUser.name);
          setName(currentUser.email);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const storedToken = localStorage.getItem("authToken");
      const requestBody = { name, email };
      await axios.put(API_URL, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setEmail("");
      setName("");
      navigate("/profile");
    } catch (error) {}
  };
  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <textarea
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditProjectPage;
