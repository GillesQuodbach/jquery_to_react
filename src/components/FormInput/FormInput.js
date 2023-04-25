import s from "./style.module.css";
import {Stack, TextField} from "@mui/material";

function FormInput(props) {
  return (
    <div className={s.formImput_container}>
      <TextField label={props.label}/>
    </div>
  );
}

export default FormInput;
