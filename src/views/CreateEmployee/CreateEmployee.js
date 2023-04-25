import s from "./style.module.css";
import FormInput from "../../components/FormInput/FormInput";
import { Button } from "@mui/material";
import {SelectMenuInput} from "../../components/SelectMenuInput/SelectMenuInput";
import {department} from "../../utils/department";
import {states} from "../../utils/states";

function CreateEmployee(props) {
  return (

    <div className={s.create_employee_container}>
      <h1>Create Employee</h1>

      <form id={s.create_employee}>
        <FormInput label={"First Name"} />
        <FormInput label={"Last Name"} />
        <FormInput label={"Date of Birth"} />
        <FormInput label={"Start Date"} />
        <fieldset className={s.adress_fieldset}>
          <legend>Adress</legend>
          <FormInput label={"Street"} />
          <FormInput label={"City"} />
          {/*<FormInput label={"State"} />*/}
          {/*  <SelectMenuInput text={"State"} datas={states}/>*/}
            <SelectMenuInput title="state" datas={states}/>
          <FormInput label={"Zip Code"} />
        </fieldset>
        {/*<FormInput label={"Department"} />*/}

      </form>
        <SelectMenuInput title="department" datas={department}/>
      <Button className={s.save_button} variant="contained">Save</Button>
    </div>


  );
}

export default CreateEmployee;
