import { notification } from 'antd';

interface INotificationProps {
  description: string;
}

export default {
  success: ({ description }: INotificationProps): void => {
    notification.success({
      message: 'Success',
      description,
      placement: 'bottomRight',
    });
  },
  error: ({ description }: INotificationProps): void => {
    notification.error({
      message: 'Error',
      description,
      placement: 'bottomRight',
    });
  },
};
