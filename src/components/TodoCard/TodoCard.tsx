import * as React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TodoList from '../TodoList/TodoList';
import CustomCard from '../CustomComponents/CustomCard/CustomCard';
import CustomTitle from '../CustomComponents/CustomTitle/CustomTitle';
import AddTodoItemModal from '../AddTodoItemModal/AddTodoItemModal';

const TodoCard: React.FC = () => {
  const [addTaskModalVisibility, setAddTaskModalVisibility] = React.useState(false);
  return (
    <>
      <CustomCard>
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="container">
              <div className="grid grid-cols-2">
                <div>
                  <CustomTitle />
                </div>
                <div className="text-right">
                  <Button
                    icon={<PlusOutlined />}
                    size="small"
                    shape="round"
                    type="dashed"
                    onClick={() => setAddTaskModalVisibility(true)}
                  >
                    Add Item
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <TodoList />
            </div>
          </div>
        </div>
      </CustomCard>
      <AddTodoItemModal
        visibility={addTaskModalVisibility}
        setVisibility={setAddTaskModalVisibility}
      />
    </>
  );
};

export default TodoCard;
