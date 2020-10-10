import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import CustomCard from './CustomCard';

export default {
  title: 'Components/Card',
  component: CustomCard,
} as Meta;

const Template: Story = (args) => (
  <CustomCard {...args}>
    <h2>Testing Card</h2>
  </CustomCard>
);

export const Default = Template.bind({});
