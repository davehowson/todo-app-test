import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import TodoListItem from './TodoListItem';

export default {
  title: 'Components/TodoListItem',
  component: TodoListItem,
} as Meta;

const Template: Story = () => (
  <TodoListItem
    todo={{ id: 0, description: 'Test Story Books', time: new Date(), completed: false }}
    removeTodoItem={() => null}
  />
);

export const Default = Template.bind({});
