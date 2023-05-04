import s from "./style.module.css";
import { Box } from "@mui/material";
import React from "react";
import MuiTable from "../../components/Table/EmployeesTable";

function EmployeeList(props) {
  return (
    <Box>
      <MuiTable />
    </Box>
  );
}

export default EmployeeList;
