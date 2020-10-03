import { ITodoItem } from '../interfaces';

const todos: Array<ITodoItem> = [
  {
    id: 1,
    description: 'Buy Milk',
    time: new Date('2020-10-03T03:24:00'),
    completed: true,
  },
  {
    id: 2,
    description: 'Buy Eggs',
    time: new Date('2020-10-04T04:24:00'),
    completed: false,
  },
  {
    id: 3,
    description: 'Check Pull Requests',
    time: new Date('2020-10-05T05:24:00'),
    completed: false,
  },
  {
    id: 4,
    description: 'Clean the Room',
    time: new Date('2020-10-06T06:24:00'),
    completed: false,
  },
];

export default {
  getAllTodos: (): Promise<Array<ITodoItem>> => {
    return new Promise((resolve) => {
      return resolve(todos);
    });
  },
  changeTodoStatus: (id: number, status: boolean): Promise<Array<ITodoItem>> => {
    return new Promise((resolve, reject) => {
      const todo = todos.find((x) => x.id === id);
      if (todo) {
        todo.completed = status;
        resolve();
      } else {
        reject();
      }
    });
  },
};
