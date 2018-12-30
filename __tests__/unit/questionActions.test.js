import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { fetchQuestions, fetchQuestion } from "../../src/actions/questions";
import { FETCH_QUESTIONS, FETCH_QUESTION  } from "../../src/actions/types";



describe("get all questions", () => {
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {question:[{
    questions: [],
  }]};
  const store = mockStore({ ...initialUserState });
   
  it("FETCH_QUESTIONS action type", () => {
    // eslint-disable-next-line no-undef
    fetchMock.get("https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions", {
      status:200,
      body:{}
    });
    const expectedActions = [{payload: {}, type: FETCH_QUESTIONS}];
    return store.dispatch(fetchQuestions()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
  });

});


describe("get a single question", () => {
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {question:[{
    question: {},
  }]};
  const store = mockStore({ ...initialUserState });
   
  it("FETCH_QUESTION action type", () => {
    // eslint-disable-next-line no-undef
    const id = 2;
    fetchMock.get('https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions/' + id, {
      status:200,
      body:{}
    });
    const expectedActions = [];
    return store.dispatch(fetchQuestion(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
  });

});