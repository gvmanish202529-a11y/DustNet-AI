import "./AlertsPanel.css";

const alerts = [
  {
    type: "Warning",
    message: "Dust Bin 80% Full",
  },
  {
    type: "Info",
    message: "Battery Charging Complete",
  },
  {
    type: "Critical",
    message: "Obstacle Detected",
  },
];

export default function AlertsPanel() {
  return (
    <div className="alerts-panel">

      <h2>Recent Alerts</h2>

      {alerts.map((alert, index) => (
        <div className="alert-card" key={index}>

          <span className={`badge ${alert.type.toLowerCase()}`}>
            {alert.type}
          </span>

          <p>{alert.message}</p>

        </div>
      ))}

    </div>
  );
}