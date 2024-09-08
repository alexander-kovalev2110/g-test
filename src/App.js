import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { AccountCircle, Email } from '@mui/icons-material';

import InputGroup from './components/InputGroup';

const App = () => {
  const [inputName, setInputName] = useState('');
  const [inputMail, setInputMail] = useState('');

  const handleNameChange = (event) => {
      setInputName(event.target.value);
  };

  const handleMailChange = (event) => {
    setInputMail(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3} sx={{ p: 2, maxWidth: 500, margin: 'auto' }}
    >
      <InputGroup 
        id="name-id"
        label="Name"
        prompt="Full name"
        value={inputName}
        onChange={handleNameChange}
        helper="Please enter your full name."
        icon={AccountCircle}
      >
      </InputGroup>

      <InputGroup 
        id="mail-id"
        label="e-mail"
        prompt="Your e-mail"
        value={inputMail}
        onChange={handleMailChange}
        helper="Please enter your e-mail."
        icon={Email}
      >        
      </InputGroup>
    </Box>
  );
};

export default App;
