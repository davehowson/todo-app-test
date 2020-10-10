import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<App />);
  });

  it('should render a div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it('should render an instance of the TodoList', () => {
    expect(container.find('TodoCard').length).toEqual(1);
  });
});
