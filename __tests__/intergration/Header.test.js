import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import  { Header }  from "../../src/components/pages/Header";
import   Headerrr   from "../../src/components/pages/Header";

describe("Header", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    questions:[],
    question:{},
    loading:true,
    response:{}   
  };

  const store = mockStore({ ...initialUserState });
  const editor = shallow(<Header store={store} logOut={jest.fn()} />);
 
  it("should render without crashing", () => {
    expect(editor).toMatchSnapshot();
  });


  // it("should render a button that handles click actions", () => {
  //   const editorr = shallow(<Header store={store} logOut={jest.fn()} />);
  //   expect(
  //     editorr.find('#logOut').length).toEqual(1)
  // });
});