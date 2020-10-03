import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TodoListItem from './TodoListItem';

describe('TodoListItem', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<TodoListItem id={0} description="" time={new Date()} completed={false} />);
  });

  it('should render a div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
