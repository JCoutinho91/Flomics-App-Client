import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";


export default function User() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

const { isLoggedIn, logOutUser } = useContext(AuthContext);

const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          const response = await axios.get(`${API_URL}/api/users/current`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          const currentUser = response.data;
          console.log(currentUser);
          setEmail(currentUser.email);
          setName(currentUser.name);
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
      await axios.put(`${API_URL}/api/users/current`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setEmail("");
      setName("");
      navigate("/dashboard");
    } catch (error) {}
  };

  return (
    <div className="user">
    {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>

      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowBottom">
            <span className="userShowTitle">Username:</span>
            <span> {name}</span>
           
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Email: </span>
         
              <span className="userShowInfoTitle">{email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form onSubmit={handleSubmit} className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username:</label>
                <input
                 type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
               
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
  );
}