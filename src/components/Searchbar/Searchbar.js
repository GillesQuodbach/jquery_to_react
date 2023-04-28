import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";

const Searchbar = ({ placeholder, onChange }) => {
  return (
    <div>
      <SearchIcon />
      <Input placeholder={placeholder} onChange={onChange} disableUnderline />
    </div>
  );
};

export default Searchbar;
