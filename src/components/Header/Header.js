import React, { useEffect } from "react";
import s from "./style.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Button, colors } from "@mui/material";

function Header() {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <div className={s.header_container}>
      {currentLocation === "/list" ? (
        <>
          <h1 className={s.header_title}>Current Employees</h1>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#333333",
            }}
          >
            <NavLink className={s.header_link} to="/">
              Home
            </NavLink>
          </Button>
        </>
      ) : (
        <>
          <h1 className={s.header_title}>HRnet</h1>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#333333",
            }}
          >
            <NavLink className={s.header_link} to="/list">
              View Current Employees
            </NavLink>
          </Button>
        </>
      )}
    </div>
  );
}

export default Header;
