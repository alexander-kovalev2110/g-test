import React from 'react';
import InputGroup from './InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
};

const Template = (args) => <InputGroup {...args} />;

export const ForName = Template.bind({});
ForName.args = {
  id: 'name-id',
  label: 'Name',
  prompt: 'Full name',
  value: 'Alex Smith',
  onChange: () => {},
  helper: 'Please enter your full name.',
};

export const ForMail = Template.bind({});
ForMail.args = {
  id: 'mail-id',
  label: 'e-mail',
  prompt: 'Your e-mail',
  value: 'example@example.com',
  onChange: () => {},
  helper: 'Please enter your e-mail.',
};
