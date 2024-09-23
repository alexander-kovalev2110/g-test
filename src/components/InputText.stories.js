import React from 'react';
import Box from '@mui/material/Box';
import InputText from './InputText';
import { AccountCircle, Email, Search } from '@mui/icons-material'

export default {
  title: 'InputText',
  component: InputText,
  argTypes: {
    size: {
      control: 'radio',  // Using radio buttons
      options: [ "small", "medium" ],  // Possible values
    },
    type: {
      control: 'radio',
      options: [ "text", "number", "date", "password" ],  // Possible values
    },
    StartIcon: {
      control: false,   // Disable control for this argument
    },
    EndIcon: {
      control: false, 
    },
    onChange: {
      control: false, 
    },
  },
};

const Template = (args) => 
  <Box sx={{ p: 2, maxWidth: 500, margin: 'auto' }}>
    <InputText {...args} />
  </Box>;

export const ForName = Template.bind({});
ForName.args = {
  label: 'Name',
  prompt: 'Full name',
  value: '',
  helper: 'Please enter your full name.',
  EndIcon: AccountCircle
};

export const ForMail = Template.bind({});
ForMail.args = {
  label: 'E-mail',
  prompt: 'Your e-mail',
  value: 'Real email text',
  helper: 'Please enter your e-mail.',
  EndIcon: Email
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  label: 'Name',
  prompt: 'Full name',
  value: '',
  helper: 'Please enter your full name.',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: 'Name',
  prompt: 'Full name',
  value: '',
  helper: 'Please enter your full name.',
  StartIcon: AccountCircle
};

export const BothIcon = Template.bind({});
BothIcon.args = {
  label: 'Name',
  prompt: 'Full name',
  value: '',
  helper: 'Please enter your full name.',
  StartIcon: Search,
  EndIcon: AccountCircle
};

export const ForError = Template.bind({});
ForError.args = {
  label: 'E-mail',
  prompt: 'Your e-mail',
  value: 'Wrong email text',
  helper: 'Invalid e-mail text.',
  EndIcon: Email,
  error: true
};

export const ForDisabled = Template.bind({});
ForDisabled.args = {
  label: 'E-mail',
  prompt: 'Your e-mail',
  value: '',
  helper: 'Input not possible.',
  EndIcon: Email,
  disabled: true
};

export const ForRequired = Template.bind({});
ForRequired.args = {
  label: 'E-mail',
  prompt: 'Your e-mail',
  value: '',
  helper: 'Please enter your e-mail. Input is required!',
  EndIcon: Email,
  required: true
};

export const SelectSize = Template.bind({});
SelectSize.args = {
  size: "small",
  label: 'SelectSize',
  prompt: 'Input field',
  value: '',
  helper: 'Please select a size for the input field',
  EndIcon: Search,
};

export const SelectType = Template.bind({});
SelectType.args = {
  type: "text",
  label: 'SelectType',
  prompt: 'Input field',
  value: '',
  helper: 'Please select a type for the input field',
  EndIcon: Search,
};
