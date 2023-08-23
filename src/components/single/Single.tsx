import "./single.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: { dataKeys: { name: string; color: string }[]; data: object[] };
  activities?: { time: string; text: string }[];
};
const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button type="button">Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="title">{item[0]}</span>
                <span className="value">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className="chart" >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((k) => (
                  <Line type="monotone" key={k.name} dataKey={k.name} stroke={k.color} />
                ))}
               </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      {props.activities &&  <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
            {props.activities.map(ac=>(<li key={ac.text}>
            <div>
              <p>{ac.text}</p>
              <time>{ac.time}</time>
            </div>
          </li>))}
          
        </ul>
      </div>}
     
    </div>
  );
};

export default Single;
