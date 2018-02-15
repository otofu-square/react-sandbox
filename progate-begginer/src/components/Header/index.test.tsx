import * as React from 'react';
import { mount } from 'enzyme';

import { Header } from '.';

describe('Header component', () => {
  const wrapper = mount(<Header />);

  it('has valid styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', '#f7f2b4');
    expect(wrapper).toHaveStyleRule('height', '90px');
  });
});
