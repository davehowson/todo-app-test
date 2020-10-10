import * as React from 'react';
import './App.less';
import TodoCard from './components/TodoCard/TodoCard';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-300">
      <div className="m-auto w-2/3">
        <TodoCard />
      </div>
    </div>
  );
};

export default App;
