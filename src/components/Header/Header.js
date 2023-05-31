import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
function Header() {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <div className={"header_container"}>
      {currentLocation === "/list" ? (
        <>
          <h1 className="header_title header_title_table">Current Employees</h1>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#333333",
              "&:hover": {
                backgroundColor: "#595959",
              },
            }}
          >
            <NavLink className={"header_link"} to="/">
              Home
            </NavLink>
          </Button>
        </>
      ) : (
        <>
          <h1 className="header_title header_title_home">HRnet</h1>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#333333",
              "&:hover": {
                backgroundColor: "#595959",
              },
            }}
          >
            <NavLink className="header_link" to="/list">
              View Current Employees
            </NavLink>
          </Button>
        </>
      )}
    </div>
  );
}

export default Header;
