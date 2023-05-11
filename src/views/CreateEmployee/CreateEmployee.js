import s from "./style.module.css";
import { v4 as uuidv4 } from "uuid";
import { addEmployeeToTheStore } from "../../store/employees/employees-slice";
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch } from "react-redux";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { format } from "date-fns";

function CreateEmployee(props) {
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    first_name: "",
    last_name: "",
    start_date: "",
    department: "",
    date_of_birth: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const dispatch = useDispatch();
  const statesList = useSelector((store) => store.persistedReducers.states);
  // console.log("****state****", statesList);

  const departmentList = useSelector(
    (store) => store.persistedReducers.departments
  );
  // console.log("****dept****", departmentList);

  const employeeId = useSelector((store) => store.persistedReducers.employees);
  // console.log(employeeId);

  const employeesIdArray = [];
  const allEmployeesIdInStore = employeeId?.forEach((item) => {
    employeesIdArray.push(item.id);

    // return employeesIdArray;
  });
  // console.log(employeesIdArray);
  const actualMaxId = Math.max(...employeesIdArray);
  // console.log(actualMaxId);

  // console.log(employee);
  //Modal setting
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data, e) => {
    newEmployee.id = actualMaxId + 1;
    newEmployee.first_name = data.first_name;
    newEmployee.last_name = data.last_name;
    newEmployee.date_of_birth = format(data.date_of_birth, "dd/MM/yyy");
    newEmployee.start_date = format(data.start_date, "dd/MM/yyyy");
    newEmployee.street = data.street;
    newEmployee.city = data.city;
    newEmployee.state = data.state;
    newEmployee.zip_code = data.zip_code;
    newEmployee.department = data.department;

    // setOpenModal(true);
    //Employee infos
    console.log(newEmployee);
    dispatch(addEmployeeToTheStore(newEmployee));
    reset();
  };

  const selectStateList = statesList?.map((state, index) => {
    return (
      <option key={uuidv4()} value={state.value}>
        {state.name}
      </option>
    );
  });

  const selectDepartmentList = departmentList?.map((department, index) => {
    return (
      <option key={uuidv4()} value={department.value}>
        {department.name}
      </option>
    );
  });

  return (
    <>
      <div className={s.create_employee_container}>
        <Typography variant="h5" className={s.create_employee_title}>
          Create Employee
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={s.form_container}
          noValidate
        >
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            {...register("first_name", {
              required: "First name is required",
            })}
          />
          <p className={s.input_error_message}>{errors.first_name?.message}</p>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            {...register("last_name", {
              required: "Last name is required",
            })}
          />
          <p className={s.input_error_message}>{errors.last_name?.message}</p>
          <label htmlFor="date_of_birth">Date of Birth</label>
          <input
            type="date"
            id="date_of_birth"
            {...register("date_of_birth", {
              valueAsDate: true,
              required: "Date of birth is required",
            })}
          />
          <p className={s.input_error_message}>
            {errors.date_of_birth?.message}
          </p>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            {...register("start_date", {
              valueAsDate: true,
              required: "Start date is required",
            })}
          />
          <p className={s.input_error_message}>{errors.start_date?.message}</p>
          <fieldset>
            <legend>Adress</legend>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              {...register("street", {
                required: "Street is required",
              })}
            />
            <p className={s.input_error_message}>{errors.street?.message}</p>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              {...register("city", {
                required: "City is required",
              })}
            />
            <p className={s.input_error_message}>{errors.city?.message}</p>
            <label htmlFor="state">State</label>
            <select
              type="text"
              id="state"
              {...register("state", {
                required: "State is required",
              })}
            >
              <option value="">-- Choose a state --</option>;{selectStateList}
            </select>
            <p className={s.input_error_message}>{errors.state?.message}</p>
            <label htmlFor="zip_code">Zip Code</label>
            <input
              type="number"
              id="zip_code"
              {...register("zip_code", {
                required: "Zip code is required",
              })}
            />
            <p className={s.input_error_message}>{errors.zip_code?.message}</p>
          </fieldset>
          <label htmlFor="state">Department</label>
          <select
            type="text"
            id="department"
            {...register("department", {
              required: "Department is required",
            })}
          >
            <option value="">-- Choose a department --</option>
            {selectDepartmentList}
          </select>
          <p className={s.input_error_message}>{errors.department?.message}</p>
          <button type="submit">Save</button>
        </form>
        <DevTool control={control} />
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
}

export default CreateEmployee;
