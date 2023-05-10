import React from "react";
import { EmployeesTable } from "../../components/Table/EmployeesTable";

function EmployeeList(props) {
  return (
    <div className="container">
      <EmployeesTable />
    </div>
  );
}

export default EmployeeList;
