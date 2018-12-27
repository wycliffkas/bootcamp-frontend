import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { fetchQuestions } from "../../src/actions/questions";
import { FETCH_QUESTIONS  } from "../../src/actions/types";



describe("question action creators", () => {
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
   
  it("post article action on FETCH_QUESTIONS action type", () => {
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