import React from 'react';
import MyInputLabel from './MyInputLabel';

export default {
  title: 'Components/MyInputLabel',
  component: MyInputLabel,
};

const Template = (args) => <MyInputLabel {...args} />;

export const ForName = Template.bind({});
ForName.args = {
  id: 'name-id',
  label: 'Name'
};

export const ForEmail = Template.bind({});
ForEmail.args = {
  id: 'mail-id',
  label: 'e-mail'
};

