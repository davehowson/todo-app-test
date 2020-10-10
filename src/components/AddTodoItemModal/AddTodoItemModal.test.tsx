import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AddTodoItemModal from './AddTodoItemModal';

describe('AddTodoItemModal', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<AddTodoItemModal visibility={false} setVisibility={jest.fn()} />);
  });

  it('should render a Modal', () => {
    expect(container.find('Modal').length).toEqual(1);
  });
});
