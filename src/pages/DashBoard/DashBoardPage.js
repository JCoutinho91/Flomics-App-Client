import "./DashBoard.css";
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

const apiURL = "http://localhost:5005/api/variant";

function DashBoardPage() {
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

  return (
    <div className="dashboard">
      <h1>This is the dashboard</h1>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
      <Link to="/profile">
        <button>Your Profile</button>
      </Link>
      <Link to="/analysis">
        <button>Analysis</button>
      </Link>
      <Link to="/results">
        <button>Results</button>
      </Link>
      <Link to="/requests">
        <button>Requests</button>
      </Link>

      <div className="chart">
        <select onChange={handleChange}>
          {region.map((country, i) => (
            <option key={country._id} value={country.Entity}>
              {country.Entity}{" "}
            </option>
          ))}
        </select>

        {/*}
        <div className="SelectReactExample">
          <Select
            value={region}
            onChange={onchangeSelect}
            options={options}
            getOptionValue={(entity) => region.Entity}
            getOptionLabel={(entity) => region.Entity}
          />
        </div>
*/}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={selectedOption}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Delta"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Omicron" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default DashBoardPage;
