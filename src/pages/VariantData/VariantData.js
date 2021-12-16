import "./VariantData.css";
import { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"
import axios from "axios";
import { Link } from "react-router-dom";


const apiURL = "http://localhost:5005/api/variant";

function VariantData() {
  const [region, setRegion] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      const allContries = response.data;

      const sortedData = allContries.sort(function (a, b) {
        var keyA = new Date(a.Day),
          keyB = new Date(b.Day);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
            });
        setRegion(allContries)
      });
      
  }, []);

return (
    <>
    <TopBar/>
<div className="dashboard">
    <SideBar/>
    <div className="home">
      
    </div>
      <div className="home">
      <ul>
      {console.log("region", region)}
       {region.map((el=>(
              <div className="lists">
        <li><h2>Country: {el.Entity}</h2></li>
        <li> Date:{el.Day}</li>
        <li> <h3>Alpha{el.Alpha}</h3></li>
        <li> <h3>Beta:{el.Beta}</h3></li>
        <li> <h3>Delta:{el.Delta}</h3></li>
        <li> <h3>Gamma:{el.Gamma}</h3></li>
        <li> <h3>Kappa:{el.Kappa}</h3></li>
        <li><h3> Lambda:{el.Lambda}</h3></li>
        <li> <h3>Mu:{el.Mu}</h3></li>
        <li> <h3>Omicron:{el.Omicron}</h3></li>
        <br/>
              </div>
              )
    ))}
    </ul>
</div>
</div>
    </>
    )
}
export default VariantData;


 
   