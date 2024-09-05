import React from 'react';
import InputText from './InputText';

export default {
  title: 'Components/InputText',
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default-id',
  prompt: 'Full name',
  value: '',
  onChange: () => {},
};

export const Filled = Template.bind({});
Filled.args = {
  id: 'name-id',
  prompt: 'Full name',
  value: 'Real name text',
  onChange: () => {},
};

// export const WithLongText = Template.bind({});
// WithLongText.args = {
//   id: 'long-text-input',
//   prompt: 'Prompt with Long Text',
//   value: 'This input field has a lot of text to show how it handles large input values.',
//   onChange: () => {},
// };
