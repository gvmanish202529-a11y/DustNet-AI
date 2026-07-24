import { Bell } from "lucide-react";

const NotificationBell = ({
  count = 3,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className="relative rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700"
    >
      <Bell
        size={22}
        className="text-white"
      />

      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;