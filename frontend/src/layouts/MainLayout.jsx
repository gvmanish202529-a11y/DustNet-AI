import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto bg-slate-900 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;