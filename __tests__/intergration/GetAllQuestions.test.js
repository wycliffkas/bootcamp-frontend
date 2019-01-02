import React from "react";
import { shallow, mount } from "enzyme";
import  { GetAllQuestions, mapDispatchToProps } from "../../src/components/GetAllQuestions";

describe("GetAllQuestions", () => {

	const initialState = {
	questions:[], 
	};

	const editor = shallow(<GetAllQuestions  questions={[initialState]} fetchQuestions={jest.fn()} />);
  
	it("should render without crashing", () => {
	  expect(editor).toMatchSnapshot();
	});
  
	it("it triggers fetchQuestions", () => {
	  const mock = jest.fn();
	  const mapper = mapDispatchToProps(mock);
	  mapper.fetchQuestions();
	  expect(mock).toHaveBeenCalled();
	});
});
