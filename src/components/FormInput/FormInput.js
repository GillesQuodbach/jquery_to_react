import s from "./style.module.css";

import React from "react";

function FormInput(props) {
  return (
    <div className={s.formImput_container}>
      <label>{props.label}</label>
      <input />
    </div>
  );
}

export default FormInput;
