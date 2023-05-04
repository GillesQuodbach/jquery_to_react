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
  Typography,
} from "@mui/material";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";

function CreateEmployee(props) {
  const dispatch = useDispatch();
  const statesList = useSelector((store) => store.persistedReducers.states);
  // console.log("****state****", statesList);

  const departmentList = useSelector(
    (store) => store.persistedReducers.departments
  );
  // console.log("****dept****", departmentList);

  const employeeId = useSelector((store) => store.persistedReducers.employees);
  console.log(employeeId);

  const employeesIdArray = [];
  const allEmployeesIdInStore = employeeId?.forEach((item) => {
    employeesIdArray.push(item.id);

    // return employeesIdArray;
  });
  console.log(employeesIdArray);
  const actualMaxId = Math.max(...employeesIdArray);
  console.log(actualMaxId);

  //State des datepickers
  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");

  const [employee, setEmployee] = useState({
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

  // console.log(employee);
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
    // console.log(formObject);
    employee.city = formObject.city;
    employee.department = formObject.department;
    employee.first_name = formObject.first_name;
    employee.last_name = formObject.last_name;
    employee.state = formObject.state;
    employee.street = formObject.street;
    employee.zip_code = formObject.zip_code;
    employee.id = actualMaxId + 1;
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
    // console.log(newValue);

    const day = newValue?.$D;
    const month = newValue?.$M + 1;
    const year = newValue?.$y;
    const formatedDate = `${day}/${month}/${year}`;
    // console.log(formatedDate);
    setDateOfBirth(newValue);
    employee.date_of_birth = formatedDate;
  };

  const handleStartDate = (newValue) => {
    // console.log(newValue);

    const day = newValue?.$D;
    const month = newValue?.$M + 1;
    const year = newValue?.$y;
    const formatedDate = `${day}/${month}/${year}`;
    // console.log(formatedDate);
    setStartDate(newValue);
    employee.start_date = formatedDate;
  };

  //DatePicker
  const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
        borderWidth: 2,
      },
    },
    "& .MuiIconButton-root": {
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  }));

  return (
    <>
      <Box className={s.create_employee_container}>
        <Typography variant="h5" className={s.create_employee_title}>
          Create Employee
        </Typography>

        <form onSubmit={addEmployee} className={s.form_container}>
          <FormInput
            className={s.test_input}
            name={"first_name"}
            label={"First Name"}
          />
          <FormInput name={"last_name"} label={"Last Name"} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DatePicker
              name="birthday"
              label="Date of Birth"
              inputFormat={"dd-MM-yyyy"}
              value={dateOfBirth}
              onChange={handleDateOfBirth}
              sx={{
                mb: 2,
                borderRadius: "5px",
                border: "1px solid #33333",
                backgroundColor: "#fff",
              }}
            /> */}
            <StyledDatePicker label="Date picker" />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              inputFormat={"dd-MM-yyyy"}
              value={startDate}
              onChange={handleStartDate}
              sx={{
                mb: 2,
                borderRadius: "5px",
                border: "1px solid #33333",
                backgroundColor: "#fff",
              }}
            />
          </LocalizationProvider>
          <Box
            component={"fieldset"}
            className={s.adress_fieldset}
            sx={{
              border: "2px solid rgba(192,192,192,0.9)",
              width: 300,
              marginBottom: 2,
            }}
          >
            <legend className={s.legend_title}>Adress</legend>
            <FormInput name={"street"} label={"Street"} />
            <FormInput name={"city"} label={"City"} />
            <FormControl sx={{ width: 250 }}>
              <TextField
                select
                name={"state"}
                id="select_state"
                defaultValue={""}
                label="Sate"
                onChange={handleSelectState}
                fullWidth
                sx={{
                  mb: 2,
                  borderRadius: "5px",
                  border: "4px solid #33333",
                  backgroundColor: "#fff",
                }}
                InputLabelProps={{
                  sx: {
                    color: "#666a86",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "#000",
                    },
                  },
                }}
                inputProps={{
                  sx: {
                    color: "#33333",
                    // fontSize: "1.2rem",
                  },
                }}
                InputProps={{
                  sx: {
                    "&:hover fieldset": {
                      border: "2px solid #000!important",
                      borderRadius: "5px",
                    },
                    "&:focus-within fieldset, &:focus-visible fieldset": {
                      border: "2px solid #000!important",
                    },
                  },
                }}
              >
                {statesList?.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormInput name={"zip_code"} label={"Zip Code"} />
          </Box>
          <FormControl sx={{ width: 300 }}>
            <TextField
              select
              name="department"
              id="select_department"
              defaultValue={""}
              label="Department"
              onChange={handleSelectDepartment}
              fullWidth
              sx={{
                mb: 2,
                borderRadius: "5px",
                border: "1px solid #33333",
                backgroundColor: "#fff",
              }}
              InputLabelProps={{
                sx: {
                  color: "#666a86",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "#000",
                  },
                },
              }}
              inputProps={{
                sx: {
                  color: "#33333",
                  // fontSize: "1.2rem",
                },
              }}
              InputProps={{
                sx: {
                  "&:hover fieldset": {
                    border: "2px solid #000!important",
                    borderRadius: "5px",
                  },
                  "&:focus-within fieldset, &:focus-visible fieldset": {
                    border: "2px solid #000!important",
                  },
                },
              }}
            >
              {departmentList?.map((item) => (
                <MenuItem key={item.name} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              className={s.openModalBtn}
              variant="contained"
              sx={{ backgroundColor: "#333333" }}
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
