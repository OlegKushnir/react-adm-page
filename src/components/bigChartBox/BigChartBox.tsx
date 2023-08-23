import "./bigChartBox.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Sun",
    visits: 4000,
    clicks: 2400,
    products: 1560
  },
  {
    name: "Mon",
    visits: 3000,
    clicks: 1398,
    products: 1500
  },
  {
    name: "Tue",
    visits: 2000,
    clicks: 3800,
    products: 850
  },
  {
    name: "Wed",
    visits: 2780,
    clicks: 3908,
    products: 2060
  },
  {
    name: "Thu",
    visits: 1890,
    clicks: 4800,
    products: 1050
  },
  {
    name: "Fri",
    visits: 2390,
    clicks: 3800,
    products: 1860
  },
  {
    name: "Sat",
    visits: 3490,
    clicks: 4300,
    products: 2560
  },
];
const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analitics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="visits"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clicks"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="products"
              stackId="1"
              stroke="#cabd82"
              fill="#cabd82"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
