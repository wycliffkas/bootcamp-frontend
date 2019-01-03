import { FETCH_QUESTIONS }  from "../../src/actions/types";
import questionsreducer from "../../src/reducers/questions";

describe("questionReducer", () => {
  it("should update state on FETCH_QUESTIONS action type", () => {
    expect(
        questionsreducer(undefined, {
        type: FETCH_QUESTIONS,
        payload: { questions: {}}
      })
    ).toEqual({questions: {questions: {}}});
  });

});