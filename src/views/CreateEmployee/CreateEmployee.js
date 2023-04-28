import s from "./style.module.css";
import FormInput from "../../components/FormInput/FormInput";
import {Button, Box} from "@mui/material";
import {SelectMenuInput} from "../../components/SelectMenuInput/SelectMenuInput";
import {department} from "../../utils/department";
import {states} from "../../utils/states";
import MuiDatePicker from "../../components/DatePicker/MuiDatePicker";
import Modal from "../../components/Modal/Modal";
import {useState} from "react";

function CreateEmployee(props) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Box className={s.create_employee_container}>
                <h1>Create Employee</h1>

                <form id={s.create_employee}>
                    <FormInput label={"First Name"}/>
                    <FormInput label={"Last Name"}/>
                    <MuiDatePicker title={"Date of Birth"}/>
                    <MuiDatePicker title={"Start Date"}/>
                    <Box component={'fieldset'}
                         className={s.adress_fieldset}
                         sx={{
                             border: '1px solid rgba(192,192,192,0.9)',
                             width: 300,
                             // marginTop: 2,
                             marginBottom: 2,
                         }}>
                        <legend>Adress</legend>
                        <FormInput label={"Street"}/>
                        <FormInput label={"City"}/>
                        {/*<FormInput label={"State"} />*/}
                        {/*  <SelectMenuInput text={"State"} datas={states}/>*/}
                        <SelectMenuInput title="state" datas={states}/>
                        <FormInput label={"Zip Code"}/>
                    </Box>
                    {/*<FormInput label={"Department"} />*/}

                </form>
                <SelectMenuInput title="department" datas={department}/>
                <Box display={'flex'} justifyContent={"center"}>
                    <Button
                        className={s.openModalBtn}
                        variant="contained"
                        onClick={() => {
                            setOpenModal(true)
                        }}
                    >Save</Button>
                </Box>
            </Box>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </>
    );
}

export default CreateEmployee;
