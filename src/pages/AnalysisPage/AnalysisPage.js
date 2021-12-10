import "./AnalysisPage.css";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const companyInfoUrl = "http://localhost:5005/api/results";

function AnalysisPage() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    axios.get(companyInfoUrl).then((response) => {
      console.log(response.data);
      const thisCompanyData = response.data;
      setCompanyData(thisCompanyData);
    });
  }, []);

  return (
    <div className="analysis">
      <h1>This is the company data page</h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={companyData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Beta"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="Gamma"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="Delta"
            stackId="1"
            stroke="#ffc050"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="Alpha"
            stackId="1"
            stroke="#ffc200"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="Lambda"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="Mu"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="Omicron"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalysisPage;
