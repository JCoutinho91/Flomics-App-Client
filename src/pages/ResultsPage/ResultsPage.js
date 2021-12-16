import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"
import { DataGrid } from "@material-ui/data-grid";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
const API_URL = "http://localhost:5005/api/users/current";


function ResultsPage(props) {
  const [userSamples, setUserSamples] = useState([]);

const columns = [
  { field: 'sampleId', headerName: 'sampleId', width: 185 },
  { field: 'company', headerName: 'company', width: 0, hide:true },
  { field: 'date', headerName: 'date', width: 160 },
  {
    field: 'Alpha',
    headerName: 'Δ',
    type: 'number',
    width: 140,
    description: "Alpha"
  },
  {
    field: 'Beta',
    headerName: 'Β',
    type: 'number',
    width: 140,
    description: "Beta"
  },
  {
    field: 'Delta',
    headerName: 'Δ',
    type: 'number',
    width: 140,
    description: "Delta"
  },
  {
    field: 'Gamma',
    headerName: 'Γ',
    type: 'number',
    width: 140,
    description: "Gamma"
  },
  {
    field: 'Kappa',
    headerName: 'Κ',
    type: 'number',
    width: 140,
    description: "Kappa"
  },
  {
    field: 'Lambda',
    headerName: 'Λ',
    type: 'number',
    width: 140,
    description: "Lambda"
  },
  {
    field: 'Mu',
    headerName: 'Μ',
    type: 'number',
    width: 140,
    description: "Mu"
  },
  {
    field: 'Omicron',
    headerName: 'Ο',
    type: 'number',
    width: 140,
    description: "Omicron"
  }
];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          const currentUser = response.data;
          const currentUserSamples = currentUser.samples;
          const rowsWithId = currentUserSamples.map((row) => {
          const { _id, ...rest } = row;
          return { id: _id, ...rest };
            });
          setUserSamples(rowsWithId);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
        <TopBar/>
    <div className="dashboard">
    <SideBar/>
    <div className="home">
      <h1>Results:</h1>
      <DataGrid
        rows={userSamples}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
      </div>
    </div>
    </>
  );
}

export default ResultsPage;
