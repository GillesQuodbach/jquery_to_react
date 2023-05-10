import s from "./style.module.css";
import { TextField } from "@mui/material";
import Input from "@mui/material/Input";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";

function FormInput(props) {
  // appel de UseForm
  const form = useForm();
  const { register, control } = form;
  return (
    <TextField
      {...register(props.name)}
      sx={{
        mb: 2,
        borderRadius: "5px",
        border: "1px solid #33333",
        backgroundColor: "#fff",
      }}
      className={s.input_field}
      id={props.name}
      // name={props.name}
      label={props.label}
      variant={"outlined"}
      //customize label
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
      //Customize inside text
      inputProps={{
        sx: {
          color: "#33333",
          // fontSize: "1.2rem",
        },
      }}
      // helperText="Please enter a valid input"
      // FormHelperTextProps={{
      //   sx: {
      //     color: "red",
      //   },
      // }}
      //customize outside border onHover and focus
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
    />
  );
}

export default FormInput;
