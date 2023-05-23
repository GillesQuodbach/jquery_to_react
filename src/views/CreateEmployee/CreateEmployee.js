import "../../App.css";
import "./CreateEmployee.css";
import { addEmployeeToTheStore } from "../../store/employees/employees-slice";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  FormControl,
} from "@mui/material";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { format, parseISO } from "date-fns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CreateEmployee(props) {
  const [modal, setModal] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const Toggle = () => setModal(!modal);
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const dispatch = useDispatch();

  //React Select Component
  const statesList = useSelector((store) => store.persistedReducers.states);
  // consolelog("****state****", statesList);

  const departmentList = useSelector(
    (store) => store.persistedReducers.departments
  );
  // console.log(departmentList[0].name);

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
    dispatch(addEmployeeToTheStore(data));
    reset();
    Toggle();
  };

  const selectStateList = statesList?.map((state, index) => {
    return (
      <MenuItem key={index} value={state.name}>
        {state.name}
      </MenuItem>
    );
  });

  const selectDepartmentList = departmentList?.map((department, index) => {
    return (
      <MenuItem key={index} value={department.value}>
        {department.name}
      </MenuItem>
    );
  });

  return (
    <Box>
      <Box className="create_employee_container">
        <Typography variant="h5" className="create_employee_title">
          Create Employee
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form_container"
          noValidate
        >
          <label htmlFor="first_name">First Name</label>
          <TextField
            size="small"
            // defaultValue={"test"}
            type="text"
            id="first_name"
            {...register("first_name", {
              required: "First name is required",
            })}
          />
          <p className="input_error_message">{errors.first_name?.message}</p>
          <label htmlFor="last_name">Last Name</label>
          <TextField
            size="small"
            // defaultValue={"test"}
            type="text"
            id="last_name"
            {...register("last_name", {
              required: "Last name is required",
            })}
          />
          <p className="input_error_message">{errors.last_name?.message}</p>
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
                defaultValue={null}
                views={["year", "month", "day"]}
                format="dd/MM/yyyy"
                size="small"
                value={dateOfBirth}
                onChange={(newValue) => {
                  setDateOfBirth(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                  },
                }}
                {...field}
              />
            )}
          />

          <p className="input_error_message">{errors.date_of_birth?.message}</p>
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
                defaultValue={startDate}
                views={["year", "month", "day"]}
                format="dd/MM/yyyy"
                value={startDate}
                size="small"
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                slotProps={{
                  textField: { variant: "outlined" },
                }}
                {...field}
              />
            )}
          />
          <p className="input_error_message">{errors.start_date?.message}</p>
          <fieldset className="address_fieldset">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <TextField
              size="small"
              // defaultValue={"test"}
              type="text"
              id="street"
              {...register("street", {
                required: "Street is required",
              })}
            />
            <p className="input_error_message">{errors.street?.message}</p>
            <label htmlFor="city">City</label>
            <TextField
              size="small"
              // defaultValue={"test"}
              type="text"
              id="city"
              {...register("city", {
                required: "City is required",
              })}
            />
            <p className="input_error_message">{errors.city?.message}</p>
            <label htmlFor="state">State</label>
            <FormControl>
              <TextField
                size="small"
                InputLabelProps={{ shrink: false }}
                // defaultValue={statesList[0].name}
                defaultValue=""
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
            <p className="input_error_message">{errors.state?.message}</p>
            <label htmlFor="zip_code">Zip Code</label>
            <TextField
              size="small"
              // defaultValue={"6767"}
              type="number"
              id="zip_code"
              {...register("zip_code", {
                required: "Zip code is required",
              })}
            />
            <p className="input_error_message">{errors.zip_code?.message}</p>
          </fieldset>
          <label htmlFor="department">Department</label>
          <FormControl sx={{ width: "70%" }}>
            <TextField
              size="small"
              InputLabelProps={{ shrink: false }}
              // defaultValue={departmentList[0].value}
              fullWidth
              select
              defaultValue=""
              type="text"
              id="department"
              {...register("department", {
                required: "Department is required",
              })}
            >
              {selectDepartmentList}
            </TextField>
          </FormControl>
          <p className="input_error_message">{errors.department?.message}</p>
          <Button
            sx={{
              backgroundColor: "#333333",
              marginTop: "1rem",
              "&:hover": {
                backgroundColor: "#595959",
              },
            }}
            type="submit"
            variant="contained"
            className="clickMe"
          >
            Save
          </Button>
        </form>
        <DevTool control={control} />
      </Box>
      <Modal
        show={modal}
        close={Toggle}
        title={"HRNet"}
        children={"Employee successfully added "}
      />
    </Box>
  );
}

export default CreateEmployee;
