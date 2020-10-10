import { ITodoItem } from '../interfaces';

let todos: Array<ITodoItem> = [
  {
    id: 1,
    description: 'Pull changes from Repo',
    time: new Date('2020-10-03T03:24:00'),
    completed: true,
  },
  {
    id: 2,
    description: 'Make mockup diagrams on Figma',
    time: new Date('2020-10-04T04:24:00'),
    completed: false,
  },
  {
    id: 3,
    description: 'Learn Storybook.js',
    time: new Date('2020-10-05T05:24:00'),
    completed: false,
  },
  {
    id: 4,
    description: 'Finish interview test',
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
  addTodo: (todo: ITodoItem): Promise<boolean> => {
    return new Promise((resolve) => {
      todos.push(todo);
      resolve(true);
    });
  },
  changeTodoStatus: (id: number, status: boolean): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const todo = todos.find((x) => x.id === id);
      if (todo) {
        todo.completed = status;
        resolve(true);
      } else {
        reject();
      }
    });
  },
  deleteTodo: (id: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const todo = todos.find((x) => x.id === id);
      if (todo) {
        todos = todos.filter((x) => x.id !== id);
        resolve(true);
      } else {
        reject();
      }
    });
  },
};
