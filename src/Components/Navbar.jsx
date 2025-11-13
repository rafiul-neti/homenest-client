import React, { use, useState } from "react";
import { useTheme } from "../CustomHooks/useTheme";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "acid");
  useTheme(theme);
  const { user, signOutUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/all-properties`}>All Properties</NavLink>
      </li>
      <li>
        <NavLink to={`/add-property`}>Add Properties</NavLink>
      </li>
      <li>
        <NavLink>My Properties</NavLink>
      </li>
      <li>
        <NavLink>My Ratings</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Log Out Successfull!",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="navbar bg-base-100">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={`/`} className="">
            <h3 className="text-h2">
              Home<span className="text-primary">Nest.</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img src={user.photoURL || <FaUser />} alt="" />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <label className="my-2 flex items-center gap-2 cursor-pointer text-base-content">
                  <span className="text-sm">
                    {theme === "acid" ? "🌙 Dark" : "☀️ Light"}
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    onChange={(e) =>
                      setTheme(e.target.checked ? "dark" : "acid")
                    }
                    checked={theme === "dark"}
                  />
                </label>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-primary text-base-100 text-lg"
                  >
                    Log Out <IoLogOut />
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to={`/login`} className="btn btn-primary text-base-100">
                Login
              </Link>
              <Link to={`/register`} className="btn btn-primary text-base-100">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
