import "babel-polyfill";
import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GetSingleQuestion, mapDispatchToProps } from "../../src/components/GetSingleQuestion";

describe("get single question", () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialUserState = {
      questions: [],
      question: {},
    };
  
    const store = mockStore({ ...initialUserState });
  const initialState = {
    question: {}
  };

  const editor = shallow(<GetSingleQuestion question={{question:{}}} questions={[initialState]} fetchQuestion={jest.fn()} match={{ params: { id: 2 } }} />);

  it("should render without crashing", () => {

    expect(editor).toMatchSnapshot();
  });

  test("it triggers fetchQuestion action", () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.fetchQuestion(2);
    expect(mock).toHaveBeenCalled();
  });
});

