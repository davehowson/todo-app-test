import * as React from 'react';
import { Card } from 'antd';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList: React.FC = () => {
  return (
    <Card title="To do List">
      <TodoListItem />
    </Card>
  );
};

export default TodoList;
