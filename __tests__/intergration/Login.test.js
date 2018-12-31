import React from "react";
import {mount } from "enzyme";

import  { Login, mapDispatchToProps}   from "../../src/components/Login";

describe("Login", () => {
  const initialState = {
    user:{}
  };
 
  const editor = mount(<Login loginUser={jest.fn()} />);
  const preventDefault = jest.fn();
  test("should render without crashing", () => {
    
    expect(editor).toMatchSnapshot();
  });
  test("it triggers the postQuestion action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.loginUser(initialState);
    expect(mock).toHaveBeenCalled();
  });
 

  test("should render a form that handles submits", () => {
    expect(
      editor.find("form").simulate("submit", { preventDefault })
    );
    expect(preventDefault).toBeCalled();
  });

  test("should render a form that handles input changes", () => {
    expect(
      editor.find("[name='username']").simulate("change", {
        target: { name: "username", value: "256jomu@gmail.com" }
      })
    );
  });

});