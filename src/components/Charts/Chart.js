import axios from "axios"
import {useState, useEffect, useContext} from "react"
import { AuthContext } from "../../context/auth.context";
import "./Chart.css";
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

function Chart() {
    const [region, setRegion] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

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
  return (
    <div className="chart">
      <h3 className="chartTitle">Variant Overview</h3>
      <select onChange={handleChange}>
          {region.map((country, i) => (
            <option key={country._id} value={country.Entity}>
              {country.Entity}{" "}
            </option>
          ))}
        </select>
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
  );
}

export default Chart;