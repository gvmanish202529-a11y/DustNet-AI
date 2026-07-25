import "./ActivityFeed.css";

const activities = [
  "Rover 1 started cleaning Zone A",
  "Plastic waste detected (98%)",
  "Battery reached 84%",
  "Cleaning mission completed",
  "AI generated daily report"
];

export default function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h2>Live Activity</h2>

      {activities.map((item, index) => (
        <div key={index} className="activity-item">
          {item}
        </div>
      ))}
    </div>
  );
}