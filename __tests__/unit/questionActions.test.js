import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { fetchQuestions, fetchQuestion, registerUser, loginUser, addNewQuestion, logOut } from "../../src/actions/questions";
import { FETCH_QUESTIONS, FETCH_QUESTION, REGISTER_USER, LOGIN_USER, ADD_QUESTION } from "../../src/actions/types";



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
    const expectedActions = [{payload: {}, type: FETCH_QUESTION}];
    return store.dispatch(fetchQuestion(id)).then(() => {
        expect(store.getActions()).toEqual([]);
    });
  });

});

describe("signup", () => {
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
    fetchMock.post("https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/auth/signup", {
      status:401,
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({user:"user"})
    });
    const user = {};
    const expectedActions = [{ type: REGISTER_USER, payload: {user:"user"} }];
    return store.dispatch(registerUser(user)).then(() => {
        expect(store.getActions()).toEqual([]);
    });
  });


  it("FETCH_QUESTIONS action type", () => {
    // eslint-disable-next-line no-undef
    fetchMock.post("https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/auth/signup", {
      status:201,
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({user:"user"})
    });
    const user = {};
    const expectedActions = [{ type: REGISTER_USER, payload: {user:"user"} }];
    return store.dispatch(registerUser(user)).then(() => {
        expect(store.getActions()).toEqual([{payload: {user: "user"}, type: "REGISTER_USER_FAIL"}]);
    });
  });  

});


describe("login", () => {
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
    fetchMock.post("https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/auth/login", {
      status:401,
      headers: {
          'content-type': 'application/json',
          "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify({user:"user"})
    });
    const user = {};
    const expectedActions = [{ type: LOGIN_USER, payload: {user:"user"} }];
    return store.dispatch(loginUser(user)).then(() => {
        expect(store.getActions()).toEqual([]);
    });
  });

});

describe("add new question", () => {
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
    fetchMock.post("https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions", {
      status:201,
      headers: {
          'content-type': 'application/json',
          "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify({user:"user"})
    });
    const user = {};
    const expectedActions = [{ type: ADD_QUESTION, payload: {user:"user"} }];
    return store.dispatch(addNewQuestion(user)).then(() => {
        expect(store.getActions()).toEqual([]);
    });
  });

   
  it("ADD_QUESTIONS action type", () => {
    // eslint-disable-next-line no-undef
    fetchMock.post("https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions", {
      status:401,
      headers: {
          'content-type': 'application/json',
          "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify({user:"user"})
    });
    const user = {};
    const expectedActions = [{ type: ADD_QUESTION, payload: {user:"user"} }];
    return store.dispatch(addNewQuestion(user)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('', () => {
    store.dispatch(logOut())
    const expectedData =  [{"payload": {"user": "user"}, "type": "ADD_QUESTION"}, {"payload": {"user": "user"}, "type": "ADD_QUESTION_FAIL"}, {"payload": "Successfully logged out", "type": "LOG_OUT"}]
      expect(store.getActions()).toEqual(expectedData);
    }); 

});
