import * as React from 'react';
import TodoList from '../TodoList/TodoList';
import CustomCard from '../CustomComponents/CustomCard/CustomCard';
import CustomTitle from '../CustomComponents/CustomTitle/CustomTitle';

const TodoCard: React.FC = () => {
  return (
    <CustomCard>
      <div className="container">
        <div className="grid grid-cols-1">
          <div>
            <CustomTitle />
          </div>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default TodoCard;
