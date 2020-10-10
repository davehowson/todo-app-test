import * as React from 'react';
import { Card } from 'antd';

const CustomCard: React.FC = ({ children }) => {
  return <Card className="custom-card">{children}</Card>;
};

export default CustomCard;
