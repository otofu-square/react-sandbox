import * as React from 'react';
import { mount } from 'enzyme';

import { Footer } from '.';

describe('Footer component', () => {
  const wrapper = mount(<Footer />);

  it('has valid styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', '#ceccf3');
    expect(wrapper).toHaveStyleRule('height', '270px');
  });
});
