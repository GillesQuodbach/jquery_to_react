import s from "./style.module.css";
import { addEmployeeToTheStore } from "../../store/employees/employees-slice";
import FormInput from "../../components/FormInput/FormInput";
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
function CreateEmployee(props) {
  const dispatch = useDispatch();
  const statesList = useSelector((store) => store.states);
  // console.log("****state****", statesList);

  const departmentList = useSelector((store) => store.departments);
  // console.log("****dept****", departmentList);

  //State des datepickers
  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");

  const [employee, setEmployee] = useState({
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

  console.log(employee);
  //Modal setting
  const [openModal, setOpenModal] = useState(false);

  const addEmployee = (e) => {
    e.preventDefault();
    setOpenModal(true);
    //Employee infos
    const form = e.currentTarget;
    // console.log(form);

    const formData = new FormData(form);
    let formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    employee.city = formObject.city;
    employee.department = formObject.department;
    employee.first_name = formObject.first_name;
    employee.last_name = formObject.last_name;
    employee.state = formObject.state;
    employee.street = formObject.street;
    employee.zip_code = formObject.zip_code;

    dispatch(addEmployeeToTheStore(employee));
  };

  const handleSelectState = (e) => {
    setState(e.target.value);
    // console.log(e.target.value);
  };
  const handleSelectDepartment = (e) => {
    setDepartment(e.target.value);
    // console.log(e.target.value);
  };

  const handleDateOfBirth = (newValue) => {
    console.log(newValue);

    const day = newValue?.$D;
    const month = newValue?.$M + 1;
    const year = newValue?.$y;
    const formatedDate = `${day}/${month}/${year}`;
    // console.log(formatedDate);
    setDateOfBirth(newValue);
    employee.date_of_birth = formatedDate;
  };

  const handleStartDate = (newValue) => {
    console.log(newValue);

    const day = newValue?.$D;
    const month = newValue?.$M + 1;
    const year = newValue?.$y;
    const formatedDate = `${day}/${month}/${year}`;
    console.log(formatedDate);
    setStartDate(newValue);
    employee.start_date = formatedDate;
  };

  return (
    <>
      <Box className={s.create_employee_container}>
        <h1>Create Employee</h1>

        <form onSubmit={addEmployee}>
          <FormInput name={"first_name"} label={"First Name"} />
          <FormInput name={"last_name"} label={"Last Name"} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="birthday"
              label="Date of Birth"
              inputFormat={"dd-MM-yyyy"}
              value={dateOfBirth}
              onChange={handleDateOfBirth}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              inputFormat={"dd-MM-yyyy"}
              value={startDate}
              onChange={handleStartDate}
            />
          </LocalizationProvider>
          <Box
            component={"fieldset"}
            className={s.adress_fieldset}
            sx={{
              border: "1px solid rgba(192,192,192,0.9)",
              width: 300,

              marginBottom: 2,
            }}
          >
            <legend>Adress</legend>
            <FormInput name={"street"} label={"Street"} />
            <FormInput name={"city"} label={"City"} />
            <FormControl>
              <InputLabel id="select_state_label">State</InputLabel>
              <Select
                name={"state"}
                labelId="select_state_label"
                id="select_state"
                defaultValue={""}
                label="Sate"
                onChange={handleSelectState}
              >
                {statesList?.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormInput name={"zip_code"} label={"Zip Code"} />
          </Box>
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="select_department_label">Department</InputLabel>
            <Select
              name="department"
              labelId="select_department_label"
              id="select_department"
              defaultValue={""}
              label="Department"
              onChange={handleSelectDepartment}
              fullWidth
            >
              {departmentList?.map((item) => (
                <MenuItem key={item.name} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              className={s.openModalBtn}
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
}

export default CreateEmployee;
