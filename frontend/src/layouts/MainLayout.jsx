import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#08111f] text-white overflow-hidden">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="flex-1 overflow-auto p-8 bg-[#0b1426]">
          {children}
        </main>

      </div>

    </div>
  );
}