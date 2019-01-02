import { FETCH_QUESTIONS, FETCH_QUESTION, REGISTER_USER, REGISTER_USER_FAIL }  from "../../src/actions/types";
import questionsreducer from "../../src/reducers/questions";

describe("questionReducer", () => {
  it("should update state on FETCH_QUESTIONS action type", () => {
    expect(
        questionsreducer(undefined, {
        type: FETCH_QUESTIONS,
        payload: { questions: {}}
      })
    ).toEqual({"question": {}, "questions": {"questions": {}}, "user": {}});
  });

});

describe("questionReducer", () => {
  it("should update state on FETCH_QUESTION action type", () => {
    expect(
        questionsreducer(undefined, {
        type: FETCH_QUESTION,
        payload: { question: {}}
      })
    ).toEqual( {"question": {"question": {}}, "questions": [], "user": {}});
  });

});

describe("questionReducer", () => {
  it("should update state on REGISTER_USER action type", () => {
    expect(
        questionsreducer(undefined, {
        type: REGISTER_USER,
        payload: {question: {}, questions: [], user: {user: {}}}
      })
    ).toEqual({"question": {}, "questions": [], "user": {"question": {}, "questions": [], "user": {"user": {}}}});
  });

});

describe("questionReducer", () => {
  it("should update state on REGISTER_USER action type", () => {
    expect(
        questionsreducer(undefined, {
        type: REGISTER_USER_FAIL,
        payload: {question: {}, questions: [], user: {user: {}}}
      })
    ).toEqual({"question": {}, "questions": [], "user": {"question": {}, "questions": [], "user": {"user": {}}}});
  });

});