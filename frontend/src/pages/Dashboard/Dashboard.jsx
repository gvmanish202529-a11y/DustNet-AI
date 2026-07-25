import MainLayout from "../../layouts/MainLayout";
import StatsCard from "../../components/Cards/StatsCard";
import LiveStatusPanel from "../../components/Dashboard/LiveStatusPanel";
import ActivityFeed from "../../components/Dashboard/ActivityFeed";
import AlertsPanel from "../../components/Dashboard/AlertsPanel";
import BatteryChart from "../../components/Dashboard/BatteryChart";
import DustChart from "../../components/Dashboard/DustChart";

export default function Dashboard() {
  return (
    <MainLayout>

      <h1
        style={{
          fontSize: "34px",
          marginBottom: "30px"
        }}
      >
        AI Command Center
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px"
        }}
      >
        <StatsCard
          title="Active Rovers"
          value="03"
          subtitle="Currently Online"
          color="#00E5FF"
        />

        <StatsCard
          title="Dust Level"
          value="21%"
          subtitle="Normal"
          color="#00D084"
        />

        <StatsCard
          title="Battery"
          value="84%"
          subtitle="Healthy"
          color="#FBBF24"
        />

        <StatsCard
          title="AI Detections"
          value="164"
          subtitle="Today's Analysis"
          color="#8B5CF6"
        />
      </div>

      <LiveStatusPanel />

      <ActivityFeed />

      <AlertsPanel />

      <BatteryChart />

    </MainLayout>
  );
}