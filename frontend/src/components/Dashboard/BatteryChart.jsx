import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./BatteryChart.css";

const data = [
  { time: "09:00", battery: 100 },
  { time: "10:00", battery: 96 },
  { time: "11:00", battery: 92 },
  { time: "12:00", battery: 88 },
  { time: "13:00", battery: 84 },
];

export default function BatteryChart() {
  return (
    <div className="battery-chart">

      <h2>Battery Usage</h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="battery"
            stroke="#00E5FF"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}