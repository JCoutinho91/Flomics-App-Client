import axios from "axios";
import "./LoginPage.css"
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
const authUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Get the function for saving and verifying the token
  const { logInUser, user } = useContext(AuthContext);
  console.log(user)

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { email, password };

      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(`${authUrl}/auth/login`,requestBody,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      // or with a service
      // const response = await authService.login(requestBody);

      // Save the token and set the user as logged in ...
      const token = response.data.authToken;
      logInUser(token);
      if(user.role === "user"){
      navigate("/dashboard");
      }else{
        navigate("/admindashboard")
      }
    } catch (error) {
      // If the request resolves with an error, set the error message in the state
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <div className="LoginPage">
      <h1 className="LoginTitle">Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;
