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
const apiURL = "http://localhost:5005/api/variant";

function DashBoardPage() {
  const [variant, setVariant] = useState([]);
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
  );
}

export default DashBoardPage;
