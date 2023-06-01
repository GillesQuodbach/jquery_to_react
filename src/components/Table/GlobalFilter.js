import React from "react";
import "./EmployeesTable.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

//Search icon
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Box
      className="search_container"
      sx={{ flexGrow: 1, height: "min-content" }}
    >
      <AppBar
        position="static"
        sx={{
          display: "flex",
          borderRadius: "10px 10px 0 0",
          backgroundColor: "rgba(147, 173, 24, 0.8)",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="header_title header_title_table">Current Employees</h1>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ color: "#000" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={filter || ""}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
