import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const NavBar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  // logout function 
  const handleLogout = () => {
    logOut().then(()=>{ toast.success("Successfully Log Out")})
      .catch((error) =>{ toast.error(error.message)});
  };
  return (
    <div className="navbar bg-base-100 my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-lg bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) => isActive && " text-blue-500"}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && " text-blue-500"}
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) => isActive && " text-blue-500"}
            >
              Career
            </NavLink>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <div className="menu menu-horizontal px-1 gap-3 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => isActive && " text-blue-500"}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive && " text-blue-500"}
          >
            About
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) => isActive && " text-blue-500"}
          >
            Career
          </NavLink>
        </div>
      </div>
      <div className="navbar-end flex gap-3">
        <img className="h-10 rounded-full" src={user? user.photoURL : userPhoto} alt="" />

        <NavLink
          to="/login"
          onClick={handleLogout}
          className=" bg-gray-500 py-2 text-white rounded-md cursor-pointer px-7"
        >
          {user ? "Log Out" : "Log In"}
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
