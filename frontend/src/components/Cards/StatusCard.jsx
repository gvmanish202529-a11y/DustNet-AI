import "./StatsCard.css";

export default function StatsCard({
  title,
  value,
  subtitle,
  color = "#00E5FF"
}) {
  return (
    <div
      className="stats-card"
      style={{
        borderTop: `4px solid ${color}`
      }}
    >
      <h4>{title}</h4>

      <h1>{value}</h1>

      <p>{subtitle}</p>
    </div>
  );
}