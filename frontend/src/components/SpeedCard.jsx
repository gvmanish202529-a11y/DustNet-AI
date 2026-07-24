import { Gauge, TrendingUp } from "lucide-react";

const SpeedCard = ({
  speed = 18,
  maxSpeed = 25,
  rover = "DustNet Rover 01",
}) => {
  const percentage = Math.min((speed / maxSpeed) * 100, 100);

  const progressColor = () => {
    if (percentage >= 80) return "bg-red-500";
    if (percentage >= 50) return "bg-orange-500";
    return "bg-green-500";
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Current Speed
          </p>

          <h2 className="mt-2 text-xl font-bold text-white">
            {rover}
          </h2>
        </div>

        <Gauge size={34} className="text-cyan-400" />
      </div>

      <div className="mt-8 text-center">
        <h1 className="text-5xl font-bold text-cyan-400">
          {speed}
        </h1>

        <p className="mt-2 text-slate-400">
          km/h
        </p>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-slate-400">
            Speed Usage
          </span>

          <span className="text-white font-semibold">
            {Math.round(percentage)}%
          </span>
        </div>

        <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressColor()}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-800 p-4">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-green-400" />
          <span className="text-slate-300">
            Max Speed
          </span>
        </div>

        <span className="font-semibold text-white">
          {maxSpeed} km/h
        </span>
      </div>
    </div>
  );
};

export default SpeedCard;