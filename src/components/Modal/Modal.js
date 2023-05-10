import React from "react";
import s from "./style.module.css";
import { useState } from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className={s.modalBackground}>
      <div className={s.modalContainer}>
        <div className={s.titleCloseBtn}>
          <button onClick={() => closeModal(false)}> X</button>
        </div>
        <div className={s.title}>
          <h1 className="modal_message">New employee successfully added</h1>
        </div>
        <div className={s.footer}>
          <button onClick={() => closeModal(false)} className={s.continueBtn}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
