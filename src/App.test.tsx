import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<App />);
  });

  it('renders a div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
