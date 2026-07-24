import {
  Clock3,
  CheckCircle2,
  PlayCircle,
  PauseCircle,
  AlertTriangle,
} from "lucide-react";

const missions = [
  {
    id: "MS-101",
    name: "Dust Inspection - Zone A",
    rover: "Rover 01",
    status: "Running",
    progress: 74,
  },
  {
    id: "MS-102",
    name: "Pipeline Monitoring",
    rover: "Rover 02",
    status: "Completed",
    progress: 100,
  },
  {
    id: "MS-103",
    name: "Thermal Scan",
    rover: "Rover 03",
    status: "Paused",
    progress: 42,
  },
  {
    id: "MS-104",
    name: "Gas Leakage Detection",
    rover: "Rover 04",
    status: "Pending",
    progress: 0,
  },
];

const statusIcon = (status) => {
  switch (status) {
    case "Running":
      return <PlayCircle className="text-green-400" size={20} />;
    case "Completed":
      return <CheckCircle2 className="text-cyan-400" size={20} />;
    case "Paused":
      return <PauseCircle className="text-yellow-400" size={20} />;
    default:
      return <Clock3 className="text-slate-400" size={20} />;
  }
};

const progressColor = (progress) => {
  if (progress >= 80) return "bg-green-500";
  if (progress >= 50) return "bg-orange-500";
  if (progress > 0) return "bg-yellow-500";
  return "bg-slate-600";
};

const Missions = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Mission Control
          </h1>

          <p className="mt-2 text-slate-400">
            Track and manage all rover missions in real time.
          </p>
        </div>

        <button className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
          + New Mission
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr className="text-left text-slate-300">
              <th className="px-6 py-4">Mission ID</th>
              <th className="px-6 py-4">Mission</th>
              <th className="px-6 py-4">Assigned Rover</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Progress</th>
            </tr>
          </thead>

          <tbody>
            {missions.map((mission) => (
              <tr
                key={mission.id}
                className="border-t border-slate-800 hover:bg-slate-800/50"
              >
                <td className="px-6 py-5 font-medium text-orange-400">
                  {mission.id}
                </td>

                <td className="px-6 py-5 text-white">
                  {mission.name}
                </td>

                <td className="px-6 py-5 text-slate-300">
                  {mission.rover}
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    {statusIcon(mission.status)}
                    <span className="text-white">
                      {mission.status}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="w-full rounded-full bg-slate-700">
                    <div
                      className={`h-2 rounded-full ${progressColor(
                        mission.progress
                      )}`}
                      style={{ width: `${mission.progress}%` }}
                    ></div>
                  </div>

                  <span className="mt-2 block text-sm text-slate-400">
                    {mission.progress}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-yellow-600/40 bg-yellow-500/10 p-5">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-yellow-400" />

          <div>
            <h3 className="font-semibold text-yellow-300">
              Mission Alert
            </h3>

            <p className="text-sm text-slate-300">
              Rover 03 has paused due to an obstacle detected on its
              current route.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;