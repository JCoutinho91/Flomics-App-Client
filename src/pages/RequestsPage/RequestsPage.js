import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"
import { DataGrid } from "@material-ui/data-grid";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
const API_URL = "http://localhost:5005/api/users/current";


function RequestsPage(props) {
  const [userRequests, setuserRequests] = useState([]);

const columns = [
  { field: 'name', headerName: 'Req Name', width: 250 },
  { field: 'size', headerName: 'Size', width: 250},
  { field: 'status', headerName: 'Status', width: 250 },
  {
    field: 'variants',
    headerName: 'Variants',
    type: 'number',
    width: 250,
    description: "variants"
  },
  {
    field: 'observations',
    headerName: 'Observations',
    type: 'number',
    width: 250,
    description: "observations"
  },
]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          const currentUser = response.data;
          const currentUserRequests = currentUser.requests;
          const rowsWithId = currentUserRequests.map((row) => {
          const { _id, ...rest } = row;
          return { id: _id, ...rest };
            });
          setuserRequests(rowsWithId);
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
      <h1>Requests:</h1>
      <DataGrid
        rows={userRequests}
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

export default RequestsPage;
