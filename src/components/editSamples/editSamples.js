import { useState } from "react";
import axios from "axios";
import "./editSamples.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const requestUrl =  process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function EditSamples() {
  const [beta, setBeta] = useState(undefined);
  const [gamma, setGamma] = useState(undefined);
  const [kappa, setKappa] = useState(undefined);
  const [delta, setDelta] = useState(undefined);
  const [alpha, setAlpha] = useState(undefined);
  const [lambda, setLambda] = useState(undefined);
  const [mu, setMu] = useState(undefined);
  const [omicron, setOmicron] = useState(undefined);

  const { sampleId } = useParams();

    const navigate = useNavigate()

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
        beta,
        gamma,
        kappa,
        delta,
        alpha,
        lambda,
        mu,
        omicron,
      };
      await axios.put(`${requestUrl}/api/results/` + sampleId, requestBody);

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
    <div className="editSamples">
      <h3>Edit Delta</h3>
      <form classname="formsamples" onSubmit={handleSubmit}>
        <label>Edit Beta</label>
        <input name="beta" type="number" value={beta} onChange={handleBeta} />
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

        <button type="submit">Edit Sample</button>
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

export default EditSamples;
