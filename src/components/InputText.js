import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const InputText = ({ label, prompt, value, type, onChange, helper, StartIcon,
            EndIcon, error, disabled, required, size }) => {

  return (
    <TextField
        label={label}
        placeholder={prompt}
        value={value}
        type={type}
        onChange={onChange}
        helperText={helper}
        error={error}
        disabled={disabled}
        required={required}
        size={size}
        fullWidth
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    {StartIcon && <StartIcon />}
                </InputAdornment>
              ),
            endAdornment: (
                <InputAdornment position="end">
                    {EndIcon && <EndIcon />}
                </InputAdornment>
            ),
        }}
        sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderWidth: '3px' // Thickening of the frame when focusing
              }
            },
          }}
    />
  );
};

export default InputText;
