import {
  Bell,
  Search,
  UserCircle2,
  Sun,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Rover Dashboard
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Monitor, control and analyze industrial rovers in real time.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-xl bg-slate-800 py-2.5 pl-10 pr-4 text-white placeholder:text-slate-500 outline-none border border-slate-700 focus:border-orange-500"
          />
        </div>

        {/* Theme Button */}
        <button className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700 transition">
          <Sun size={20} />
        </button>

        {/* Notifications */}
        <button className="relative rounded-xl bg-slate-800 p-3 hover:bg-slate-700 transition">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-2">
          <UserCircle2 size={38} className="text-orange-500" />

          <div>
            <h4 className="text-sm font-semibold text-white">
              Operator
            </h4>

            <p className="text-xs text-slate-400">
              Mission Control
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;