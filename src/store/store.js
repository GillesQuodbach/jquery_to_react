import {configureStore} from "@reduxjs/toolkit";
import {employeesSlice} from "./employees/employees-slice";

const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer
    },
});

export {store};
