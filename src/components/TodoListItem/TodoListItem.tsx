import * as React from 'react';
import { Button, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { DeleteOutlined } from '@ant-design/icons';
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
    <div className={`grid grid-cols-12 p-3 my-1 ${completeStatus && 'line-through text-gray-400'}`}>
      <div className="col-span-1 flex items-center">
        <Checkbox onChange={handleTodoStatusChange} checked={completeStatus} />
      </div>
      <div className="col-span-7 flex items-center">
        <p className="font-sans text-base">{description}</p>
      </div>
      <div className="col-span-3 flex items-center">
        <p className="font-sans text-sm pl-4">{time.toDateString()}</p>
      </div>
      <div className="col-span-1 flex items-center">
        <Button shape="circle" ghost icon={<DeleteOutlined className="delete-icon" />} />
      </div>
    </div>
  );
};

export default TodoListItem;
