import React from 'react';
import TextField from '@mui/material/TextField';

const InputText = ({ id, prompt, value, onChange }) => {
    return (
        <TextField
            id={id}
            label={prompt}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
        />
    );
};

export default InputText;
