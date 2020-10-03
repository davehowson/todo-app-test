import * as React from 'react';
import { Card } from 'antd';
import { ITodoItem } from '../../interfaces';
import TodoListItem from '../TodoListItem/TodoListItem';
import todoListService from '../../services/todoListService';

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = React.useState<Array<ITodoItem>>([]);

  React.useEffect(() => {
    todoListService.getAllTodos().then((res) => {
      setTodoList(res);
    });
  });

  return (
    <Card title="To do List">
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          time={todo.time}
          completed={todo.completed}
        />
      ))}
    </Card>
  );
};

export default TodoList;
