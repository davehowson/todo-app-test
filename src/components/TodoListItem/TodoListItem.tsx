import * as React from 'react';
import { Card, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { ITodoItem } from '../../interfaces';
import todoListService from '../../services/todoListService';

const TodoListItem: React.FC<ITodoItem> = ({ id, description, time, completed }) => {
  const [completeStatus, setCompleteStatus] = React.useState(false);

  React.useEffect(() => {
    setCompleteStatus(completed);
  }, [completed, setCompleteStatus]);

  const handleTodoStatusChange = (e: CheckboxChangeEvent) => {
    todoListService
      .changeTodoStatus(id, Boolean(e.target.checked))
      .then(() => {
        setCompleteStatus(Boolean(e.target.checked));
        // handle success notification
      })
      .catch(() => {
        // handle failure
      });
  };
  return (
    <Card>
      <div className="flex p-3">
        <div className="flex-initial flex items-center mr-3">
          <Checkbox onChange={handleTodoStatusChange} checked={completeStatus} />
        </div>
        <div className="flex-initial pr-3">
          <p className="font-sans text-lg text-indigo-600">{description}</p>
        </div>
        <div className="flex-initial flex items-center">
          <p className="font-sans text-sm text-gray-500 pl-4">{time.toDateString()}</p>
        </div>
      </div>
    </Card>
  );
};

export default TodoListItem;
