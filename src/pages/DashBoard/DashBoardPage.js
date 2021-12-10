import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./DashBoard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const apiURL = "http://localhost:5005/api/variant";

function DashBoardPage() {
  const [variant, setVariant] = useState([]);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      const allContries = response.data;
      allContries.sort(function (a, b) {
        var keyA = new Date(a.Day),
          keyB = new Date(b.Day);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      const validInfo = allContries.filter((ele) => {
        return ele.Entity === "Portugal" && ele.Delta > 0;
      });

      console.log(allContries);
      setVariant(validInfo);
    });
  }, []);
  return (
    <div className="dashboard">
      <h1>This is the dashboard</h1>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
      <button>
        <Link to="/profile">Check your Profile Here</Link>{" "}
      </button>
      <button>
        <Link to="/analysis">Lab Results</Link>{" "}
      </button>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={variant}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="Omicron"
              stackId="1"
              stroke="#ffff00"
              fill="#ffff00"
            />
            <Area
              type="monotone"
              dataKey="Delta"
              stackId="2"
              stroke="#000000"
              fill="#000000"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashBoardPage;
