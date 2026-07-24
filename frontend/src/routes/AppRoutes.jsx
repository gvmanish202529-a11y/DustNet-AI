import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Missions from "../pages/Missions";
import Camera from "../pages/Camera";
import Sensors from "../pages/Sensors";
import Alerts from "../pages/Alerts";
import HelpCenter from "../pages/HelpCenter";
import Profile from "../pages/Profile";
import RoverDetails from "../pages/RoverDetails";
import NotFound from "../pages/NotFound";

import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rover/:id" element={<RoverDetails />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;