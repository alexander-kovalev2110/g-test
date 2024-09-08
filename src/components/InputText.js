import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


const InputText = ({ id, prompt, value, onChange, icon: IconComponent }) => {
    return (
        <TextField
            id={id}
            label={prompt}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {IconComponent && <IconComponent />} 
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default InputText;
