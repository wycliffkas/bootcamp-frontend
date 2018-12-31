import React from "react";
import {mount } from "enzyme";

import  { AddQuestion, mapDispatchToProps}   from "../../src/components/AddQuestion";

describe("<Content />", () => {
  const initialState = {
    user:{}
  };
 
  const editor = mount(<AddQuestion addNewQuestion={jest.fn()} />);
  const preventDefault = jest.fn();
  it("should render without crashing", () => {
    
    expect(editor).toMatchSnapshot();
  });
  test("it triggers the postQuestion action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.addNewQuestion(initialState);
    expect(mock).toHaveBeenCalled();
  });
 
  it("should render a form that handles input changes", () => {
    expect(
      editor.find("[name='title']").simulate("change", {
        target: { name: "title", value: "dogs" }
      })
    );
  });

  it("should render a form that handles submits", () => {
    expect(
      editor.find("form").simulate("submit", { preventDefault })
    );
    expect(preventDefault).toBeCalled();
  });

});