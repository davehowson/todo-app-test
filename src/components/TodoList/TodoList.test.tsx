import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<TodoList />);
  });

  it('should render an instance of Card', () => {
    expect(container.find('Card').length).toBeGreaterThanOrEqual(1);
  });

  // TODO - Check why this fails
  // it('should render an instance of TodoListItem', () => {
  //   expect(container.find('TodoListItem').length).toBeGreaterThanOrEqual(1);
  // });
});
