import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import {TextField} from "@mui/material";

export function SelectMenuInput(props) {
    console.log(props)
    const [data, setData] = useState('');
    console.log(data)
    const handleChange = (event)=> {
        setData(event.target.value)
    }
    return (
    <Box width={'250px'}>
        <TextField label={`Select ${props.title}`} select value={data} onChange={handleChange} fullWidth>
            {/*<MenuItem value={'sales'}>Sales</MenuItem>*/}
            {/*<MenuItem value={'marketing'}>Marketing</MenuItem>*/}
            {/*<MenuItem value={'engineering'}>Engineering</MenuItem>*/}
            {/*<MenuItem value={'human Resources'}>Human Resources</MenuItem>*/}
            {/*<MenuItem value={'legal'}>Legal</MenuItem>*/}
            {props?.datas?.map(data => <MenuItem key={data?.name} value={data.value || data.abbreviation}>{data?.name}</MenuItem>)}
        </TextField>
    </Box>
)
}

// {states.map(state => <MenuItem key={state.name} value={state.abbreviation}>{state.name}</MenuItem>)}
