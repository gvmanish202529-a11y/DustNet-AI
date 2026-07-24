import {
  Bot,
  BatteryCharging,
  Activity,
  MapPin,
  Wifi,
 Thermometer,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const RoverDetails = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Rover Details
          </h1>

          <p className="mt-2 text-slate-400">
            Live status and diagnostics of DustNet Rover 01.
          </p>
        </div>

        <div className="rounded-xl bg-green-500/20 px-4 py-2 text-green-400 font-semibold">
          ● Online
        </div>
      </div>

      {/* Rover Info */}
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col items-center">
          <div className="rounded-full bg-orange-500/20 p-6">
            <Bot size={60} className="text-orange-500" />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-white">
            DustNet Rover 01
          </h2>

          <p className="mt-2 text-slate-400">
            Industrial Inspection Rover
          </p>
        </div>

        <div className="lg:col-span-3 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
            <BatteryCharging className="text-green-400 mb-3" size={30} />

            <p className="text-slate-400">Battery</p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              92%
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
            <Activity className="text-cyan-400 mb-3" size={30} />

            <p className="text-slate-400">Speed</p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              18 km/h
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
            <MapPin className="text-orange-500 mb-3" size={30} />

            <p className="text-slate-400">Location</p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Zone A
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
            <Wifi className="text-green-400 mb-3" size={30} />

            <p className="text-slate-400">Network</p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Connected
            </h3>
          </div>
        </div>
      </div>

      {/* Diagnostics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Live Diagnostics
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-slate-300">
                <Thermometer size={18} />
                Temperature
              </span>

              <span className="font-semibold text-white">
                34°C
              </span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-slate-300">
                <Gauge size={18} />
                Pressure
              </span>

              <span className="font-semibold text-white">
                101.2 kPa
              </span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-slate-300">
                <ShieldCheck size={18} />
                Safety Status
              </span>

              <span className="font-semibold text-green-400">
                Safe
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Mission Summary
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-slate-400">
                Current Mission
              </p>

              <h3 className="mt-2 text-white font-semibold">
                Dust Inspection - Zone A
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-slate-400">
                Mission Progress
              </p>

              <div className="mt-3 h-3 rounded-full bg-slate-700">
                <div
                  className="h-3 rounded-full bg-orange-500"
                  style={{ width: "74%" }}
                ></div>
              </div>

              <p className="mt-2 text-white font-semibold">
                74%
              </p>
            </div>

            <button className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
              View Live Camera
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoverDetails;