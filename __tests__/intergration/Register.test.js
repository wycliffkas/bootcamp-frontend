import React from "react";
import {mount } from "enzyme";
import { Provider } from 'react-redux';

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import  { Register, mapDispatchToProps}   from "../../src/components/Register";
import  ConnectedRegister   from "../../src/components/Register";

describe("<Content />", () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    questions:[],
    question:{},
    loading:true,
    response:{}   
  };

  const store = mockStore({ ...initialUserState });
  const initialState = {
    title: "",
    body: "",
  };
 
  const editor = mount(<Register RegisterUser={jest.fn()} />);
  const coneditor = mount(<Provider store={store} ><ConnectedRegister RegisterUser={jest.fn()} /></Provider>);
  const preventDefault = jest.fn();
  it("should render without crashing", () => {
    
    expect(editor).toMatchSnapshot();
  });
  test("it triggers the postQuestion action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.RegisterUser(initialState);
    expect(mock).toHaveBeenCalled();
  });
 
  it("should render a form that handles input changes", () => {
    expect(
      coneditor.find("[name='email']").simulate("change", {
        target: { name: "email", value: "test@gmail.com" }
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