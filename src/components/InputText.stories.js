import React from 'react';
import InputText from './InputText';
import { AccountCircle, Email } from '@mui/icons-material'

export default {
  title: 'Components/InputText',
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const ForName = Template.bind({});
ForName.args = {
  id: 'default-id',
  prompt: 'Full name',
  value: '',
  onChange: () => {},
  icon: Email
};

export const ForMail = Template.bind({});
ForMail.args = {
  id: 'name-id',
  prompt: 'Full name',
  value: 'Real name text',
  onChange: () => {},
  icon: AccountCircle
};
