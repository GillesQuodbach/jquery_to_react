import React, { useEffect } from "react";
import s from "./style.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <div className={s.header_container}>
      {currentLocation === "/list" ? (
        <>
          <h1 className={s.header_title}>Current Employees</h1>
          <NavLink className={s.header_link} to="/">
            Home
          </NavLink>
        </>
      ) : (
        <>
          <h1 className={s.header_title}>HRnet</h1>
          <NavLink className={s.header_link} to="/list">
            View Current Employees
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Header;
