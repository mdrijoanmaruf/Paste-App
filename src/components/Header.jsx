import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup, signOut } from "firebase/auth";
import {auth , provider} from '../firebase/config'

const Header = () => {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("isAuth") || false));

  function handleLogin(){
    signInWithPopup(auth , provider).then((result) => {
      console.log(result);
      setAuth(true);
      localStorage.setItem("isAuth" , true);
    })
  }

  function handleLogout(){
    signOut(auth);
    setAuth(false)
    localStorage.setItem("isAuth" , false)
  }

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6 border-b ">
        <header>
          <Link
            to="/"
            className="text-3xl font-bold text-blue-600 hover:text-blue-800"
          >
            Paste
          </Link>
        </header>
        <nav className="flex items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 font-semibold hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          {isAuth ? (
            <>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 font-semibold hover:text-blue-600"
                }
              >
                Create
              </NavLink>
              <button className="flex items-center gap-2 px-4 py-2 text-red-600 font-semibold bg-gray-100 rounded-md hover:bg-gray-200 transition" onClick={handleLogout}>
                <LuLogOut />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <button className="flex items-center gap-2 px-4 py-2 text-green-600 font-semibold bg-gray-100 rounded-md hover:bg-gray-200 transition" onClick={handleLogin}>
              <FaGoogle />
              <span>Login</span>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
