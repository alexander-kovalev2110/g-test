import React from 'react';
import Box from '@mui/material/Box';

import InputText from './InputText';
import MyInputLabel from './MyInputLabel';
import InputAnnotation from './InputAnnotation';

const InputGroup = ({ id, label, prompt, value, onChange, helper, icon }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={1} 
        >
            <MyInputLabel id={id} label={label}></MyInputLabel>
            <InputText
                id={id}
                prompt={prompt}
                value={value}
                onChange={onChange}
                icon={icon}
            />
            <InputAnnotation helper={helper}></InputAnnotation>
        </Box>
    );
};

export default InputGroup;
