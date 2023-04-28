import React from 'react';
import s from './style.module.css'
import {useState} from "react";

const Modal = ({closeModal}) => {

    return (
        <div className={s.modalBackground}>
            <div className={s.modalContainer}>
                <div className={s.titleCloseBtn}>
                    <button onClick={() => closeModal(false)}> X</button>
                </div>
                <div className={s.title}>
                    <h1>Add this new employee ?</h1>
                </div>
                <div className={s.body}>
                    <p>Employee details</p>
                </div>
                <div className={s.footer}>
                    <button
                        id={s.cancelBtn}
                        onClick={() => closeModal(false)}>Cancel
                    </button>
                    <button className={s.continueBtn}>Continue</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;

