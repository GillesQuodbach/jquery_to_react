import s from "./style.module.css";
import { TextField } from "@mui/material";
import Input from "@mui/material/Input";

function FormInput(props) {
  return (
    <div className={s.formImput_container}>
      <TextField
        id={props.name}
        name={props.name}
        label={props.label}
        variant={"outlined"}
      />
    </div>
  );
}

export default FormInput;
