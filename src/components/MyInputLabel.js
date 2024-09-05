import React from 'react';
import InputLabel from '@mui/material/InputLabel';

const MyInputLabel = ({ label, id }) => {
    return (
        <InputLabel htmlFor={id} sx={{ fontWeight: 'bold' }}>
            {label}
        </InputLabel>
    );
};

export default MyInputLabel;
