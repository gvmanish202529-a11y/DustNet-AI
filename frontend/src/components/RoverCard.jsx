import {
  Bot,
  BatteryCharging,
  MapPin,
  Wifi,
  Activity,
  ArrowRight,
} from "lucide-react";

const RoverCard = ({
  name = "DustNet Rover 01",
  location = "Zone A",
  battery = 92,
  status = "Online",
  speed = "12 km/h",
  onViewDetails = () => {},
}) => {
  const batteryColor =
    battery >= 70
      ? "text-green-400"
      : battery >= 40
      ? "text-yellow-400"
      : "text-red-500";

  const statusColor =
    status === "Online"
      ? "bg-green-500"
      : status === "Working"
      ? "bg-orange-500"
      : "bg-red-500";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:border-orange-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-orange-500/10 p-3">
            <Bot className="text-orange-500" size={32} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              {name}
            </h2>

            <div className="mt-1 flex items-center gap-2 text-slate-400">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <span
          className={`h-3 w-3 rounded-full ${statusColor}`}
        ></span>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <BatteryCharging
            className={`mx-auto mb-2 ${batteryColor}`}
            size={26}
          />

          <p className="text-sm text-slate-400">
            Battery
          </p>

          <h3 className="mt-1 text-lg font-bold text-white">
            {battery}%
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <Activity
            className="mx-auto mb-2 text-cyan-400"
            size={26}
          />

          <p className="text-sm text-slate-400">
            Speed
          </p>

          <h3 className="mt-1 text-lg font-bold text-white">
            {speed}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <Wifi
            className="mx-auto mb-2 text-green-400"
            size={26}
          />

          <p className="text-sm text-slate-400">
            Status
          </p>

          <h3 className="mt-1 text-lg font-bold text-white">
            {status}
          </h3>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onViewDetails}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
      >
        View Details
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default RoverCard;