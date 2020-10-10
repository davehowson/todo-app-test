import * as React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const CustomTitle: React.FC = () => {
  return (
    <Title level={2}>
      the<span className="todo-title--highlighted">Todo</span>list
    </Title>
  );
};

export default CustomTitle;
