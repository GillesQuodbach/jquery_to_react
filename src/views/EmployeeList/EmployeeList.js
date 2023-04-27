import s from "./style.module.css"

import React from 'react';
import MuiTable from "../../components/Table/EmployeesTable";

function EmployeeList(props) {
    return (
        <div>
            <MuiTable/>
        </div>
    );
}

export default EmployeeList;