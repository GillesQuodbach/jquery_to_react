import {Stack, TextField} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers'
import {useState} from "react";

const MuiDatePicker = (props) => {
    const [startDate, setStartDate] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);

    if (props.title === "Start Date") {
        // console.log('startDate',startDate)
        return (
            <Stack spacing={4} sx={{width: '250px'}}>
                <DatePicker
                    label={props.title}
                    // renderInput={(params) => <TextField {...params}/>}
                    slotProps={{textField: {variant: 'outlined'}}}
                    value={startDate}
                    onChange={(newValue) => {
                        setStartDate(newValue)
                    }}
                />
            </Stack>
        )
    } else if (props.title === "Date of Birth") {
        // console.log('dateOfBirth',dateOfBirth)
        return (
            <Stack spacing={4} sx={{width: '250px'}}>
                <DatePicker
                    label={props.title}
                    // renderInput={(params) => <TextField {...params}/>}
                    slotProps={{textField: {variant: 'outlined'}}}
                    value={dateOfBirth}
                    onChange={(newValue) => {
                        setDateOfBirth(newValue)
                    }}
                />
            </Stack>
        )
    }
}

export default MuiDatePicker;
