import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./employees/employees-slice";
import { statesSlice } from "./states/states-slice";
import { departmentsSlice } from "./departments/department-slice";

const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
    states: statesSlice.reducer,
    departments: departmentsSlice.reducer,
  },
});

export { store };
