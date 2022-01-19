import axios from "axios"
import {useState, useEffect} from "react"
import "./BetaChart.css";
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
const apiURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005/api/variant";

function BetaChart() {
  const [region, setRegion] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);


  useEffect(() => {
    axios.get(`${apiURL}/api/variant`).then((response) => {
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
      <h3 className="chartTitle">Beta Variant</h3>
      <select className="select__country" onChange={handleChange}>
          {Array.from(new Set(region.map(obj => obj.Entity))).map(el => {
    return <option value={el}>{el}</option>
})}
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
              dataKey="Beta"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
    </div>
    
  );
}

export default BetaChart;