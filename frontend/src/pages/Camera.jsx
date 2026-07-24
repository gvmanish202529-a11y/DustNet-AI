import {
  Camera,
  Video,
  Maximize2,
  RefreshCw,
  Wifi,
} from "lucide-react";

const CameraPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Live Camera Feed
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor the rover's live video stream.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-3 hover:bg-slate-700 transition">
            <RefreshCw size={18} />
            Refresh
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 hover:bg-orange-600 transition">
            <Maximize2 size={18} />
            Full Screen
          </button>
        </div>
      </div>

      {/* Camera Feed */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <div className="aspect-video w-full rounded-xl bg-slate-800 flex flex-col items-center justify-center">
          <Camera
            size={90}
            className="text-orange-500 mb-5"
          />

          <h2 className="text-2xl font-semibold text-white">
            Live Camera Stream
          </h2>

          <p className="mt-2 text-slate-400 text-center">
            Connect your backend video stream here.
          </p>
        </div>
      </div>

      {/* Camera Details */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <Video className="text-orange-500 mb-4" size={34} />

          <h3 className="text-lg font-semibold text-white">
            Resolution
          </h3>

          <p className="mt-2 text-slate-400">
            1920 × 1080 (Full HD)
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <Wifi className="text-green-400 mb-4" size={34} />

          <h3 className="text-lg font-semibold text-white">
            Stream Status
          </h3>

          <p className="mt-2 text-green-400">
            Connected
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <Camera className="text-cyan-400 mb-4" size={34} />

          <h3 className="text-lg font-semibold text-white">
            Active Camera
          </h3>

          <p className="mt-2 text-slate-400">
            Front Vision Camera
          </p>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;