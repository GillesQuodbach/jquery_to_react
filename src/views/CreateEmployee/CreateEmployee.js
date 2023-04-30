import s from "./style.module.css";
import dayjs from "dayjs";
import FormInput from "../../components/FormInput/FormInput";
import {
  Button,
  Box,
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { departmentList } from "../../utils/department";
import { states } from "../../utils/states";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

function CreateEmployee(props) {
  //State des datepickers
  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");

  //Modal setting
  const [openModal, setOpenModal] = useState(false);
  const addEmployee = (e) => {
    e.preventDefault();
    setOpenModal(true);
    const form = e.target;

    //Employee infos
    const formData = new FormData(form);
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const street = formData.get("street");
    const city = formData.get("city");
    const zipCode = formData.get("zip_code");

    console.log(
      firstName,
      lastName,
      dateOfBirth?.$d,
      startDate?.$d,
      street,
      city,
      state,
      zipCode,
      department
    );
  };

  const handleSelectState = (e) => {
    setState(e.target.value);
    // console.log(e.target.value);
  };
  const handleSelectDepartment = (e) => {
    setDepartment(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      <Box className={s.create_employee_container}>
        <h1>Create Employee</h1>

        <form onSubmit={addEmployee}>
          <FormInput name={"first_name"} label={"First Name"} />
          <FormInput name={"last_name"} label={"Last Name"} />
          <DatePicker
            label={"Date of Birth"}
            name={"date_of_birth"}
            title={"Date of Birth"}
            value={dateOfBirth}
            onChange={(newDate) => setDateOfBirth(newDate)}
          />
          <DatePicker
            label={"Start Date"}
            name={"start_date"}
            title={"Start Date"}
            value={startDate}
            onChange={(newDate) => setStartDate(newDate)}
          />

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
                labelId="select_state_label"
                id="select_state"
                defaultValue={""}
                label="Sate"
                onChange={handleSelectState}
              >
                {states?.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <SelectMenuInput
              name={"state"}
              title="state"
              datas={states}
              onChange={handleState}
            /> */}
            <FormInput name={"zip_code"} label={"Zip Code"} />
          </Box>
          {/* <SelectMenuInput
            name={"department"}
            title="department"
            datas={department}
          /> */}
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="select_department_label">Department</InputLabel>
            <Select
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
