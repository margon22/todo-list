import React from "react";
import {  NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
       
        <div>
          <div className="navbar-nav d-flex flex-row gap-4">
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
