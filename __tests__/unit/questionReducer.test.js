import { FETCH_QUESTIONS, FETCH_QUESTION, REGISTER_USER, REGISTER_USER_FAIL, LOGIN_USER_FAIL, LOGIN_USER, ADD_QUESTION_FAIL, ADD_QUESTION, LOG_OUT }  from "../../src/actions/types";
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

describe("questionReducer", () => {
  it("should update state on LOGIN_USER action type", () => {
    expect(
        questionsreducer(undefined, {
        type: LOGIN_USER,
        payload: {question: {}, questions: [], user: {user: {}}}
      })
    ).toEqual({"question": {}, "questions": [], "user": {"question": {}, "questions": [], "user": {"user": {}}}});
  });

});

describe("questionReducer", () => {

  const intialState= {"question": {}, "questions": [], "user": {"question": {}, "questions": [], "user": {"user": {}}}}
  it("should update state on LOGIN_USER_FAIL action type", () => {
    expect(
        questionsreducer(undefined, {
        type: LOGIN_USER_FAIL,
        payload: {question: {}, questions: [], user: {user: {}}}
      })
    ).toEqual({"question": {}, "questions": [], "user": {"question": {}, "questions": [], "user": {"user": {}}}});
  });


  it("should update state on ADD_QUESTION_FAIL action type", () => {
    expect(
        questionsreducer(intialState, {
        type: ADD_QUESTION_FAIL,
        payload: {}
      })
    ).toEqual(intialState);
  });

  it("should update state on ADD_QUESTION action type", () => {
    expect(
        questionsreducer(intialState, {
        type: ADD_QUESTION,
        payload: {}
      })
    ).toEqual(intialState);
  });

  it("should return default state", () => {
    expect(
        questionsreducer(intialState, {
        type: '',
        payload: {}
      })
    ).toEqual(intialState);
  });

  it("should update state on LOG_OUT action type", () => {
    expect(
        questionsreducer(intialState, {
        type: LOG_OUT,
        payload: {}
      })
    ).toEqual({...intialState, response:{}});
  });

});

