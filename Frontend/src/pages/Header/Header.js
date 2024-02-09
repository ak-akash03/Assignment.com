import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../Accets/IMAGE/assignmentcom.png";
export default function Header() {
  return (
    <div  className="maindiv">
      <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex logo items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>

          <div className="navbarx">
            <li>
              <NavLink
                className={() =>
                  `block NavLink py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/about"}
                className={() =>
                  `block NavLink py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
           
          
            <li>
              <NavLink
              to={"/help"}
                className={() =>
                  `block NavLink py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Help
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/login"}
                className={() =>
                  `block NavLink py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/signup"}
                className={() =>
                  `block NavLink duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                SignUp
              </NavLink>
            </li>
          </div>

        </div>
      </nav>
    </header>
    </div>
  );
}
