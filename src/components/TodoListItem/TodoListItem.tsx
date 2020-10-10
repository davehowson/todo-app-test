import * as React from 'react';
import { Button, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodoItem } from '../../interfaces';
import todoListService from '../../services/todoListService';
import notificationService from '../../services/notificationService';

interface ITodoListItemProps {
  todo: ITodoItem;
  removeTodoItem: (id: number) => void;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({ todo, removeTodoItem }) => {
  const [completeStatus, setCompleteStatus] = React.useState(false);

  React.useEffect(() => {
    setCompleteStatus(todo.completed);
  }, [todo.completed, setCompleteStatus]);

  const handleTodoStatusChange = (e: CheckboxChangeEvent) => {
    todoListService
      .changeTodoStatus(todo.id, Boolean(e.target.checked))
      .then(() => {
        setCompleteStatus(Boolean(e.target.checked));
        notificationService.success({ description: 'Successfully completed task' });
      })
      .catch(() => {
        notificationService.error({ description: 'Failed to completed task' });
      });
  };

  const handleTodoDelete = () => {
    todoListService
      .deleteTodo(todo.id)
      .then(() => {
        removeTodoItem(todo.id);
        notificationService.success({ description: 'Successfully deleted task' });
      })
      .catch(() => {
        notificationService.error({ description: 'Failed to delete task' });
      });
  };

  return (
    <div className={`grid grid-cols-12 p-3 my-1 ${completeStatus && 'line-through text-gray-400'}`}>
      <div className="col-span-1 flex items-center">
        <Checkbox onChange={handleTodoStatusChange} checked={completeStatus} />
      </div>
      <div className="col-span-7 flex items-center">
        <p className="font-sans text-base">{todo.description}</p>
      </div>
      <div className="col-span-3 flex items-center">
        <p className="font-sans text-sm pl-4">{todo.time.toDateString()}</p>
      </div>
      <div className="col-span-1 flex items-center">
        <Button
          shape="circle"
          ghost
          onClick={handleTodoDelete}
          icon={<DeleteOutlined className="delete-icon" />}
        />
      </div>
    </div>
  );
};

export default TodoListItem;
