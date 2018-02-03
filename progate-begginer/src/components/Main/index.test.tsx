import * as React from 'react';
import { mount } from 'enzyme';

import { Main } from '.';

describe('Main component', () => {
  const wrapper = mount(<Main />);

  it('has valid styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', '#bdf7f1');
    expect(wrapper).toHaveStyleRule('height', '600px');
  });
});
