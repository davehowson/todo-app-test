import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import CustomTitle from './CustomTitle';

export default {
  title: 'Components/Title',
  component: CustomTitle,
} as Meta;

const Template: Story = (args) => <CustomTitle {...args} />;

export const Default = Template.bind({});
