import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { AccountCircle, Email, Search } from '@mui/icons-material';

import InputText from './components/InputText';

const App = () => {
  const [inputName, setInputName] = useState('');
  const [inputMail, setInputMail] = useState('');
  const [inputDate, setInputDate] = useState(new Date().toISOString().substring(0, 10));

  const handleNameChange = (event) => {
      setInputName(event.target.value);
  };

  const handleMailChange = (event) => {
    setInputMail(event.target.value);
  };

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3} sx={{ p: 2, maxWidth: 500, margin: 'auto' }}
    >
      <InputText 
        label="Name"
        prompt="Full name"
        value={inputName}
        onChange={handleNameChange}
        helper="Please enter your full name."
        EndIcon={AccountCircle}
        size="medium"
      >
      </InputText>

      <InputText 
        label="E-mail"
        prompt="Your e-mail"
        value={inputMail}
        onChange={handleMailChange}
        helper="Please enter your e-mail."
        EndIcon={Email}
        size="small"
        type="email"
      >        
      </InputText>

      <InputText 
        label="Date"
        prompt="Your date"
        value={inputDate}
        onChange={handleDateChange}
        helper="Please enter your date."
        EndIcon={Search}
        size="medium"
        type="date"
      >        
      </InputText>
    </Box>
  );
};

export default App;
