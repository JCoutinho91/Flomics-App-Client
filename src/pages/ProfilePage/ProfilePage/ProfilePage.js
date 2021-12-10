import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005/api/users/current";

function EditProjectPage(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

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
          setImage(currentUser.image);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="ProjectPage">
      <h3>Profile Page</h3>
      <h1>{name}</h1>
      <img src={image} alt="userimg" />
      <p> {email}</p>
      <Link to="/profile/edit">Edit your Profile Here</Link>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default EditProjectPage;
