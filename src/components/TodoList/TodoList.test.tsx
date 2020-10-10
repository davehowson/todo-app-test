import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<TodoList />);
  });

  it('should render an instance of div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
