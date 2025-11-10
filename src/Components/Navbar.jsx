import React, { use, useState } from "react";
import { useTheme } from "../CustomHooks/useTheme";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "acid");
  useTheme(theme);
  const { user } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>All Properties</NavLink>
      </li>
      <li>
        <NavLink>Add Properties</NavLink>
      </li>
      <li>
        <NavLink>My Properties</NavLink>
      </li>
      <li>
        <NavLink>My Ratings</NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
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
                className="btn btn-ghost rounded-field"
              >
                Dropdown
              </div>
              <ul
                tabIndex="-1"
                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
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
          <label className="flex items-center gap-2 cursor-pointer text-base-content">
            <span className="text-sm">
              {theme === "acid" ? "🌙 Dark" : "☀️ Light"}
            </span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              onChange={(e) => setTheme(e.target.checked ? "dim" : "acid")}
              checked={theme === "dim"}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
