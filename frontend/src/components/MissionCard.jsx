import { Target, Clock3, CheckCircle2 } from "lucide-react";

const MissionCard = ({
  missionName = "Dust Inspection",
  rover = "Rover 01",
  progress = 75,
  status = "Running",
  eta = "12 mins",
}) => {
  const progressColor = () => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  const statusColor = () => {
    switch (status) {
      case "Completed":
        return "text-green-400";
      case "Running":
        return "text-orange-400";
      default:
        return "text-yellow-400";
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-orange-500/10 p-3">
          <Target className="text-orange-500" size={28} />
        </div>

        <span
          className={`rounded-full bg-slate-800 px-3 py-1 text-sm font-medium ${statusColor()}`}
        >
          {status}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-white">
        {missionName}
      </h2>

      <p className="mt-2 text-slate-400">
        Assigned Rover: {rover}
      </p>

      <div className="mt-6">
        <div className="mb-2 flex justify-between">
          <span className="text-slate-400">Progress</span>

          <span className="font-semibold text-white">
            {progress}%
          </span>
        </div>

        <div className="h-3 rounded-full bg-slate-700">
          <div
            className={`h-full rounded-full ${progressColor()}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-400">
          <Clock3 size={18} />
          <span>{eta}</span>
        </div>

        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle2 size={18} />
          <span>Healthy</span>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;