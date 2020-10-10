import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TodoListItem from './TodoListItem';
import { ITodoItem } from '../../interfaces';

describe('TodoListItem', () => {
  let container: ShallowWrapper;
  const todo: ITodoItem = {
    id: 0,
    description: '',
    time: new Date(),
    completed: false,
  };

  beforeEach(() => {
    container = shallow(<TodoListItem todo={todo} removeTodoItem={jest.fn()} />);
  });

  it('should render a div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
