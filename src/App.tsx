import * as React from 'react';
import './App.less';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto w-2/3">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
