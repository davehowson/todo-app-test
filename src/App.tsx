import * as React from 'react';
import { Layout, Button } from 'antd';
import './App.less';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="container">
      <Content>
        <div>
          <h2>Hello World</h2>
          <Button type="primary">Button</Button>
        </div>
      </Content>
    </div>
  );
};

export default App;
