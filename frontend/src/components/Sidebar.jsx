import {
  LayoutDashboard,
  Target,
  Camera,
  Cpu,
  Bell,
  Bot,
  CircleHelp,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Missions",
    path: "/missions",
    icon: <Target size={20} />,
  },
  {
    name: "Live Camera",
    path: "/camera",
    icon: <Camera size={20} />,
  },
  {
    name: "Sensors",
    path: "/sensors",
    icon: <Cpu size={20} />,
  },
  {
    name: "AI Alerts",
    path: "/alerts",
    icon: <Bell size={20} />,
  },
  {
    name: "AI Assistant",
    path: "/chat",
    icon: <Bot size={20} />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={20} />,
  },
  {
    name: "Help Center",
    path: "/help",
    icon: <CircleHelp size={20} />,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-orange-500">
          DustNet AI
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Industrial Rover Platform
        </p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-xs text-slate-400">
            System Status
          </p>

          <h3 className="mt-2 text-green-400 font-semibold">
            All Rovers Online
          </h3>
        </div>
      </div>
    </aside>
  );
};
