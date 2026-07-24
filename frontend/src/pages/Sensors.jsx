import {
  Thermometer,
  Wind,
  Gauge,
  Droplets,
  Activity,
  CheckCircle2,
} from "lucide-react";

const sensors = [
  {
    name: "Temperature",
    value: "34°C",
    status: "Normal",
    icon: <Thermometer size={28} className="text-red-400" />,
  },
  {
    name: "Humidity",
    value: "58%",
    status: "Normal",
    icon: <Droplets size={28} className="text-blue-400" />,
  },
  {
    name: "Air Quality",
    value: "Good",
    status: "Healthy",
    icon: <Wind size={28} className="text-green-400" />,
  },
  {
    name: "Pressure",
    value: "101.2 kPa",
    status: "Stable",
    icon: <Gauge size={28} className="text-orange-400" />,
  },
];

const Sensors = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Sensor Monitoring
        </h1>

        <p className="mt-2 text-slate-400">
          Real-time environmental and rover sensor readings.
        </p>
      </div>

      {/* Sensor Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {sensors.map((sensor) => (
          <div
            key={sensor.name}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">
              {sensor.icon}

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                {sensor.status}
              </span>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {sensor.name}
            </h3>

            <p className="mt-2 text-3xl font-bold text-orange-500">
              {sensor.value}
            </p>
          </div>
        ))}
      </div>

      {/* Live Status */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Live Diagnostics
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
            <div className="flex items-center gap-3">
              <Activity className="text-cyan-400" />
              <span>Sensor Health</span>
            </div>

            <span className="font-semibold text-green-400">
              100%
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-400" />
              <span>System Diagnostics</span>
            </div>

            <span className="font-semibold text-green-400">
              Operational
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
            <div className="flex items-center gap-3">
              <Wind className="text-blue-400" />
              <span>Air Quality Index</span>
            </div>

            <span className="font-semibold text-white">
              AQI 42
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensors;