import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<App />);
  });

  it('renders an instance of Content', () => {
    expect(container.find('Content').length).toBeGreaterThanOrEqual(1);
  });
});
