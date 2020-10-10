import * as React from 'react';
import { Modal, Input, DatePicker } from 'antd';
import todoListService from '../../services/todoListService';
import notificationService from '../../services/notificationService';

interface IAddTodoItemModalProps {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}

const AddTodoItemModal: React.FC<IAddTodoItemModalProps> = ({ visibility, setVisibility }) => {
  const [description, setDescription] = React.useState('');
  const [date, setDate] = React.useState<Date>(new Date());

  const clearForm = () => {
    setDescription('');
    setDate(new Date());
  };

  const handleOk = () => {
    if (description && date) {
      todoListService.addTodo({
        id: Date.now(),
        description,
        time: date,
        completed: false,
      });
      clearForm();
      setVisibility(false);
    } else {
      notificationService.error({ description: 'Cannot submit without required values' });
    }
  };

  const handleCancel = () => {
    clearForm();
    setVisibility(false);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearForm();
    setDescription(e.target.value);
  };

  // disabled because x is a moment object and moment is not installed in project
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (x: any, y: string) => {
    if (y) {
      setDate(new Date(y));
    }
  };

  return (
    <Modal
      title="Add new todo item"
      visible={visibility}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
    >
      <div className="container">
        <div className="grid grid-col-1 gap-3">
          <div>
            <Input
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Date &amp; Time"
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddTodoItemModal;
