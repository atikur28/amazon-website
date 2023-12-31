import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import LoadingSpinner from "./LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
    return (
        <div> 
            <nav className="navbar bg-base-100 drop-shadow-lg">
               <div className="navbar-start">
                 <div className="dropdown">
                   <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                   </label>
                   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   <li><NavLink to="/">Home</NavLink></li>
                     <li>
                       <NavLink to="/products">Products</NavLink>
                     </li>
                     <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                   </ul>
                 </div>
                 <a className="btn btn-ghost normal-case text-3xl lg:ml-28">Amazon</a>
               </div>
               <div className="navbar-center hidden lg:flex">
                 <ul className="flex gap-5 menu menu-horizontal px-1 text-lg font-semibold">
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/products">Products</NavLink></li>
                   <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                 </ul>
               </div>
               <div className="navbar-end">
                 <a className="btn lg:mr-28">Contact Us</a>
              </div>
            </nav>
            <div className="my-10 min-h-screen">
            {
              navigation.state === "loading" ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;