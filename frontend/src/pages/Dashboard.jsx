import {
  Activity,
  BatteryCharging,
  Bot,
  CheckCircle2,
  Cpu,
  MapPinned,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const cards = [
  {
    title: "Active Rovers",
    value: "08",
    icon: <Bot size={28} />,
    color: "text-orange-500",
  },
  {
    title: "Battery Average",
    value: "92%",
    icon: <BatteryCharging size={28} />,
    color: "text-green-400",
  },
  {
    title: "Sensor Status",
    value: "Healthy",
    icon: <Cpu size={28} />,
    color: "text-cyan-400",
  },
  {
    title: "Network",
    value: "Online",
    icon: <Wifi size={28} />,
    color: "text-purple-400",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Real-time overview of all connected industrial rovers.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {card.value}
                </h2>
              </div>

              <div className={card.color}>
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rover Status */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Rover Status
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>DustNet Rover #01</span>
              </div>

              <span className="font-semibold text-green-400">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
              <div className="flex items-center gap-3">
                <Activity className="text-orange-500" />
                <span>Mission Progress</span>
              </div>

              <span className="font-semibold text-white">
                74%
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-cyan-400" />
                <span>Safety Status</span>
              </div>

              <span className="font-semibold text-green-400">
                Safe
              </span>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Live Rover Location
          </h2>

          <div className="flex h-72 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-slate-800">
            <MapPinned
              size={70}
              className="mb-4 text-orange-500"
            />

            <h3 className="text-xl font-semibold text-white">
              Interactive Map
            </h3>

            <p className="mt-2 text-center text-slate-400">
              Live rover tracking using GPS and AI navigation
              will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;