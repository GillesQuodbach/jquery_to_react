import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Sales",
    value: "sales",
    label: "Sales",
  },
  {
    name: "Marketing",
    value: "marketing",
    label: "Marketing",
  },
  {
    name: "Engineering",
    value: "engineering",
    label: "n",
  },
  {
    name: "Human Resources",
    value: "Human Resources",
    label: "Human Resources",
  },
  {
    name: "Legal",
    value: "legal",
    label: "Legal",
  },
];

export const departmentsSlice = createSlice({
  name: "departmentsSlice",
  initialState: initialState,
});
