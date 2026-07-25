import { NavLink } from "react-router-dom";

import {
LayoutDashboard,
Bot,
Truck,
FileText,
Settings,
LogOut
} from "lucide-react";

import "./Sidebar.css";

export default function Sidebar(){

return(

<div className="sidebar">

<h2>DustNet AI</h2>

<NavLink to="/dashboard">

<LayoutDashboard size={20}/>

<span>Dashboard</span>

</NavLink>

<NavLink to="/rover">

<Truck size={20}/>

<span>Rover</span>

</NavLink>

<NavLink to="/chat">

<Bot size={20}/>

<span>AI Chat</span>

</NavLink>

<NavLink to="/reports">

<FileText size={20}/>

<span>Reports</span>

</NavLink>

<NavLink to="/settings">

<Settings size={20}/>

<span>Settings</span>

</NavLink>

<div className="logout">

<LogOut size={20}/>

<span>Logout</span>

</div>

</div>

);

}