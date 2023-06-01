import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../../assests/logo.jpg";
function Header() {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <div className={"header_container"}>
      {currentLocation === "/list" ? (
        <>
          <img className="logo" src={logo} alt="logo" />

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
          <img className="logo" src={logo} alt="logo" />
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
