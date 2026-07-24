import { BatteryCharging, BatteryFull, BatteryLow } from "lucide-react";

const BatteryCard = ({
  battery = 92,
  charging = false,
  rover = "DustNet Rover 01",
}) => {
  const getBatteryIcon = () => {
    if (charging) {
      return <BatteryCharging size={34} className="text-green-400" />;
    }

    if (battery <= 20) {
      return <BatteryLow size={34} className="text-red-500" />;
    }

    return <BatteryFull size={34} className="text-green-400" />;
  };

  const getProgressColor = () => {
    if (battery <= 20) return "bg-red-500";
    if (battery <= 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Battery Status
          </p>

          <h2 className="mt-2 text-xl font-bold text-white">
            {rover}
          </h2>
        </div>

        {getBatteryIcon()}
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-slate-300">
            Charge
          </span>

          <span className="font-bold text-white">
            {battery}%
          </span>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">
          <div
            className={`h-full rounded-full transition-all duration-500 ${getProgressColor()}`}
            style={{ width: `${battery}%` }}
          />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-slate-400">
            Status
          </span>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              charging
                ? "bg-green-500/20 text-green-400"
                : battery <= 20
                ? "bg-red-500/20 text-red-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {charging ? "Charging" : "Operational"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BatteryCard;