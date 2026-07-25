import "./LiveStatusPanel.css";

const roverData = [
  {
    title: "Rover Status",
    value: "ONLINE",
    color: "#00D084",
  },
  {
    title: "Current Speed",
    value: "3.6 km/h",
    color: "#00E5FF",
  },
  {
    title: "Battery",
    value: "84%",
    color: "#FBBF24",
  },
  {
    title: "Dust Bin",
    value: "27%",
    color: "#8B5CF6",
  },
];

export default function LiveStatusPanel() {
  return (
    <div className="live-panel">
      <h2>Live Rover Status</h2>

      <div className="live-grid">
        {roverData.map((item) => (
          <div
            key={item.title}
            className="live-card"
          >
            <p>{item.title}</p>

            <h3
              style={{
                color: item.color,
              }}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}