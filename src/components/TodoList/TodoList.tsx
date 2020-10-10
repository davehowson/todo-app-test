import * as React from 'react';
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

  const removeTodoItem = (id: number) => {
    setTodoList(todoList.filter((x) => x.id !== id));
  };

  return (
    <div className="container p-4">
      <div className="grid grid-cols-1 divide-y divide-gray-400">
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} removeTodoItem={removeTodoItem} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
