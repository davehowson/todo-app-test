import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TodoCard from './TodoCard';

describe('TodoCard', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<TodoCard />);
  });

  it('should have a CustomCard element', () => {
    expect(container.find('CustomCard').length).toEqual(1);
  });

  it('should have an instance of TodoList', () => {
    expect(container.find('TodoList').length).toEqual(1);
  });
});
