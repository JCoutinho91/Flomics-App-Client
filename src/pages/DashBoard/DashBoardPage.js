import "./DashBoard.css";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
=======
import Chart from "../../components/Charts/Chart"
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
>>>>>>> develop


function DashBoardPage() {
<<<<<<< HEAD
  const [region, setRegion] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [options, setOptions] = useState([]);
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

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
      setRegion(sortedData);
    });
  }, []);

  const handleChange = (e) => {
    const getCountry = region.filter((el) => {
      return el.Entity === e.target.value;
    });
    setSelectedOption(getCountry);
  };

  //const mappedOptions = region[0].map((el) => {
  //  return setOptions(el.Entity);
  // });

=======

>>>>>>> develop
  return (
    <>
    <TopBar/>
<div className="dashboard">
    <SideBar/>
    <div className="home">
      <Chart/>
    </div>
</div>
    </>
    )
}
export default DashBoardPage;
