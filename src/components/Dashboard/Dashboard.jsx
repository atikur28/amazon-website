import { NavLink, Outlet } from "react-router-dom";
import Profile from "./Profile";

const Dashboard = () => {
    return (
        <div className="flex items-start gap-5">
            <div className="w-1/3 flex flex-col items-start border-r-2 ">
                <NavLink to="/dashboard/dash-board"><h2 className="text-2xl font-semibold px-32">Dashboard</h2></NavLink>
                <NavLink to="/dashboard/profile"><h2 className="text-2xl font-semibold my-4 px-32">Profile</h2></NavLink>
                <NavLink to="/dashboard/edit-profile"><h2 className="text-2xl font-semibold px-32">Edit Profile</h2></NavLink>
            </div>
            <div className="w-2/3">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;