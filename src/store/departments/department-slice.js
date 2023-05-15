import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Sales",
    value: "sales",
  },
  {
    name: "Marketing",
    value: "marketing",
  },
  {
    name: "Engineering",
    value: "engineering",
  },
  {
    name: "Human Resources",
    value: "Human Resources",
  },
  {
    name: "Legal",
    value: "legal",
  },
];

export const departmentsSlice = createSlice({
  name: "departmentsSlice",
  initialState: initialState,
});
