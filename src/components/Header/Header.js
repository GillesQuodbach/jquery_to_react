import React, { useEffect } from "react";
import s from "./style.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const currentLocation = location.pathname;
  console.log(location.pathname);
  const url = window.location.href;
  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <div className={s.header_container}>
      <h1 className={s.header_title}>HRnet</h1>
      {currentLocation === "/list" ? (
        <NavLink to="/">Home</NavLink>
      ) : (
        <NavLink to="/list">View Current Employees</NavLink>
      )}
    </div>
  );
}

export default Header;
