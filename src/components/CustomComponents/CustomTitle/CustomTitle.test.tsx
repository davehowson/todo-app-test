import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CustomTitle from './CustomTitle';

describe('CustomTitle', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<CustomTitle />);
  });

  it('should contain a Title element', () => {
    expect(container.find('Title').length).toEqual(1);
  });
});
