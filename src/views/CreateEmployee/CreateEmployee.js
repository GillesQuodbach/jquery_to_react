import s from "./style.module.css";
import "./CreateEmployee.css";
import { v4 as uuidv4 } from "uuid";
import { addEmployeeToTheStore } from "../../store/employees/employees-slice";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { format, parseISO } from "date-fns";
import Select from "react-select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CreateEmployee(props) {
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const dispatch = useDispatch();

  //React Select Component
  const statesList = useSelector((store) => store.persistedReducers.states);
  // console.log("****state****", statesList);

  const departmentList = useSelector(
    (store) => store.persistedReducers.departments
  );
  console.log(departmentList[0].name);
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();

    //Employee infos
    data.start_date = format(
      parseISO(data.start_date.toISOString()),
      `dd/MM/yyyy`
    );
    data.date_of_birth = format(
      parseISO(data.date_of_birth.toISOString()),
      `dd/MM/yyyy`
    );

    console.log(data);
    //dispatch(addEmployeeToTheStore(data));
    reset();
    setOpenModal(true);
  };

  const selectStateList = statesList?.map((state, index) => {
    return (
      <MenuItem key={uuidv4()} value={state.name}>
        {state.name}
      </MenuItem>
    );
  });

  const selectDepartmentList = departmentList?.map((department, index) => {
    return (
      <MenuItem key={uuidv4()} value={department.value}>
        {department.name}
      </MenuItem>
    );
  });

  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  console.log(startDate);

  return (
    <Box>
      <Box className={s.create_employee_container}>
        <Typography variant="h5" className={s.create_employee_title}>
          Create Employee
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={s.form_container}
          noValidate
        >
          <label htmlFor="first_name">First Name</label>
          <TextField
            size="small"
            defaultValue={"test"}
            type="text"
            id="first_name"
            {...register("first_name", {
              required: "First name is required",
            })}
          />
          <p className={s.input_error_message}>{errors.first_name?.message}</p>
          <label htmlFor="last_name">Last Name</label>
          <TextField
            size="small"
            defaultValue={"test"}
            type="text"
            id="last_name"
            {...register("last_name", {
              required: "Last name is required",
            })}
          />
          <p className={s.input_error_message}>{errors.last_name?.message}</p>
          <label htmlFor="date_of_birth">Date of Birth</label>
          <Controller
            name="date_of_birth"
            control={control}
            defaultValue={null}
            rules={{
              required: { value: true, message: "Birth date is required" },
            }}
            render={({ field }) => (
              <DatePicker
                size="small"
                inputFormat="dd MM yyyy"
                // label="Start date"
                value={dateOfBirth}
                onChange={(newValue) => {
                  setDateOfBirth(newValue);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
                {...field}
              />
            )}
          />
          {/* <input
            type="date"
            id="date_of_birth"
            {...register("date_of_birth", {
              valueAsDate: true,
              required: "Date of birth is required",
            })}
          /> */}
          <p className={s.input_error_message}>
            {errors.date_of_birth?.message}
          </p>
          {/* <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            {...register("start_date", {
              valueAsDate: true,
              required: "Start date is required",
            })} */}
          {/* /> */}
          <label htmlFor="start_date">Start Date</label>
          <Controller
            name="start_date"
            control={control}
            defaultValue={null}
            rules={{
              required: { value: true, message: "Start date is required" },
            }}
            render={({ field }) => (
              <DatePicker
                size="small"
                // label="Start date"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                inputFormat="dd MM yyyy"
                slotProps={{ textField: { variant: "outlined" } }}
                {...field}
              />
            )}
          />
          <p className={s.input_error_message}>{errors.start_date?.message}</p>
          <fieldset className="address_fieldset">
            <legend>Adress</legend>
            <label htmlFor="street">Street</label>
            <TextField
              size="small"
              defaultValue={"test"}
              type="text"
              id="street"
              {...register("street", {
                required: "Street is required",
              })}
            />
            <p className={s.input_error_message}>{errors.street?.message}</p>
            <label htmlFor="city">City</label>
            <TextField
              size="small"
              defaultValue={"test"}
              type="text"
              id="city"
              {...register("city", {
                required: "City is required",
              })}
            />
            <p className={s.input_error_message}>{errors.city?.message}</p>
            <label htmlFor="state">State</label>
            <FormControl>
              <TextField
                InputLabelProps={{ shrink: false }}
                defaultValue={statesList[0].name}
                fullWidth
                select
                type="text"
                id="state"
                {...register("state", {
                  required: "State is required",
                })}
              >
                {selectStateList}
              </TextField>
            </FormControl>
            <p className={s.input_error_message}>{errors.state?.message}</p>
            <label htmlFor="zip_code">Zip Code</label>
            <TextField
              size="small"
              defaultValue={"6767"}
              type="number"
              id="zip_code"
              {...register("zip_code", {
                required: "Zip code is required",
              })}
            />
            <p className={s.input_error_message}>{errors.zip_code?.message}</p>
          </fieldset>
          <label htmlFor="department">Department</label>
          <FormControl>
            <TextField
              InputLabelProps={{ shrink: false }}
              defaultValue={departmentList[0].value}
              fullWidth
              select
              type="text"
              id="department"
              {...register("department", {
                required: "Department is required",
              })}
            >
              {selectDepartmentList}
            </TextField>
          </FormControl>
          <p className={s.input_error_message}>{errors.department?.message}</p>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
        <DevTool control={control} />
      </Box>
      {openModal && <Modal closeModal={setOpenModal} />}
    </Box>
  );
}

export default CreateEmployee;
