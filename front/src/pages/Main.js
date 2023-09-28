import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

function Main() {
    return (
        <div style={{margin: 20, padding: 20, textAlign: 'center'}}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
            {" "}
            <FormControl sx={{m: 1, minWidth: 120}}>
                <NativeSelect
                    defaultValue={"none"}
                    inputProps={{
                        name: 'category',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={"none"}>통합검색</option>
                    <option value={"region"}>지역별 검색</option>
                    <option value={"theme"}>테마별 검색</option>
                </NativeSelect>
            </FormControl>
            <TextField id="standard-search" type="search" variant="standard" />
            <IconButton type="submit" sx={{p: "10px"}} aria-label="search"><SearchIcon /></IconButton>
            </Box>
        </div>
    );
}

export default Main;