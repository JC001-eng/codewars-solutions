// Uses Jest
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

import { States } from "./solution";

describe('Default State', () => {
  const wrapper = shallow(<States />);

  it('It has a state called united', () => {
    expect(wrapper.state('united')).not.toEqual(null);
  });

  it("It has a state 'united' witha value of false", () => {
    expect(wrapper.state('united')).toEqual(false);
  });
});

describe('Changing of state', () => {
  const wrapper = shallow(<States />);
  
  it("Components United state is changed to true when 'unite' function is called", () => {
    wrapper.instance().unite();
    expect(wrapper.state('united')).toEqual(true);
  });
  
});

describe('State based render', () => {
  const wrapper = shallow(<States />);
  
  it("Renders text 'Make America code again' if state.united is false", () => {
    expect(wrapper.find('.status').text()).toEqual('Make America code again');
  });
  
  it("Renders text 'Code for everyone' if state.united is true", () => {
    wrapper.instance().unite();
    expect(wrapper.find('.status').text()).toEqual('Code for everyone');
  });
  
});