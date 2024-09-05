import React from 'react';
import InputAnnotation from './InputAnnotation';
import '../index.css';

export default {
  title: 'Components/InputAnnotation',
  component: InputAnnotation,
};

const Template = (args) => <InputAnnotation {...args} />;

export const Default = Template.bind({});
Default.args = {
  helper: 'This is the default annotation.',
};

export const ForEmail = Template.bind({});
ForEmail.args = {
  helper: 'Please enter your e-mail.',
};

