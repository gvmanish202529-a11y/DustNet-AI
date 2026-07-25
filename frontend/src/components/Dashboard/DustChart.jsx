import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./DustChart.css";

const data = [
  { zone: "A", dust: 28 },
  { zone: "B", dust: 41 },
  { zone: "C", dust: 15 },
  { zone: "D", dust: 37 },
  { zone: "E", dust: 24 },
];

export default function DustChart() {
  return (
    <div className="dust-chart">

      <h2>Dust Analytics</h2>

      <ResponsiveContainer width="100%" height={280}>

        <BarChart data={data}>

          <XAxis dataKey="zone" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="dust" fill="#5E81F4" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}