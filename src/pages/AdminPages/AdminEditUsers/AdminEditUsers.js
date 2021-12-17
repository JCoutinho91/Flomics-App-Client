import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminEditUsers.css"
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
const createResult = process.env.REACT_APP_SERVER_URL


function AdminEditUsers(props) {
  const [sampleId,setSampleId] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("")
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);
  const [kappa, setKappa] = useState(0);
  const [delta, setDelta] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [lambda, setLambda] = useState(0);
  const [mu, setMu] = useState(0);
  const [omicron, setOmicron] = useState(0);
  const [userIdentify, setUserIdentify] = useState("");

  const { userId } = useParams();

    const navigate = useNavigate();

  const handleSampleId = (e) => setSampleId(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleBeta = (e) => setBeta(e.target.value);
  const handleGamma = (e) => setGamma(e.target.value);
  const handleKappa = (e) => setKappa(e.target.value);
  const handleDelta = (e) => setDelta(e.target.value);
  const handleAlpha = (e) => setAlpha(e.target.value);
  const handleLambda = (e) => setLambda(e.target.value);
  const handleMu = (e) => setMu(e.target.value);
  const handleOmicron = (e) => setOmicron(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const requestBody = {
         sampleId,
         company,
         date,
         Beta : beta,
         Gamma: gamma,
         Kappa: kappa,
         Delta: delta,
         Alpha: alpha,
         Lambda: lambda,
         Mu: mu,
         Omicron: omicron,
         userIdentify: userId
      };
      await axios.post(`${API_URL}/api/results/new` , requestBody);
      setSampleId("")
      setCompany("")
      setDate("")
      setBeta(0);
      setGamma(0);
      setKappa(0);
      setDelta(0);
      setAlpha(0);
      setLambda(0);
      setMu(0);
      setOmicron(0);
    } catch (error) {
      console.log(error);
    }
  };


 return (
    <div className="editUsers">
      <h3>Edit Delta</h3>
      <form className="usersForm" onSubmit={handleSubmit}>
        <label>Edit Sample Id</label>
        <input name="sampleId" type="number" value={sampleId} onChange={handleSampleId} />
        <label>Edit Company</label>
        <input
          name="company"
          type="text"
          value={company}
          onChange={handleCompany}
        />
        <label>Edit Date</label>
        <input
          name="date"
          type="text"
          value={date}
          onChange={handleDate}
        />
        <label>Edit Beta</label>
        <input
          name="beta"
          type="text"
          value={beta}
          onChange={handleGamma}
        />
        <label>Edit Gamma</label>
        <input
          name="gamma"
          type="number"
          value={gamma}
          onChange={handleGamma}
        />
        <label>Edit Kappa</label>
        <input
          name="kappa"
          type="number"
          value={kappa}
          onChange={handleKappa}
        />
        <label>Edit Delta</label>
        <input
          name="delta"
          type="number"
          value={delta}
          onChange={handleDelta}
        />
        <label>Edit Alpha</label>
        <input
          name="alpha"
          type="number"
          value={alpha}
          onChange={handleAlpha}
        />
        <label>Edit Lambda</label>
        <input
          name="lambda"
          type="number"
          value={lambda}
          onChange={handleLambda}
        />
        <label>Edit Mu</label>
        <input name="mu" type="number" value={mu} onChange={handleMu} />
        <label>Edit Omicron</label>
        <input
          name="omicron"
          type="number"
          value={omicron}
          onChange={handleOmicron}
        />

        <button type="submit">Edit Users Results</button>
         <button
        onClick={() => {
          navigate("/admindashboard");
        }}
      >
        Back
      </button>
      </form>
      </div>
    
  );
}

export default AdminEditUsers;



