import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CustomCard from './CustomCard';

describe('CustomCard', () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<CustomCard />);
  });

  it('should have a Card element', () => {
    expect(container.find('Card').length).toEqual(1);
  });
});
