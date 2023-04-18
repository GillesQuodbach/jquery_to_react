import React, { useEffect } from "react";
import s from "./style.module.css";
import { NavLink, useParams } from "react-router-dom";

function Header(props) {
  const url = window.location.pathname;
  useEffect(() => {
    console.log("****", url);
  }, [url]);
  if (url === "/") {
    return (
      <div className={s.header_container}>
        <h1 className={s.header_title}>HRnet</h1>
        <NavLink className={s.header_link} to={"/list"}>
          View Current Employees
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className={s.header_container}>
        <h1 className={s.header_title}>HRnet</h1>
        <NavLink className={s.header_link} to={"/"}>
          List
        </NavLink>
      </div>
    );
  }
}

export default Header;
