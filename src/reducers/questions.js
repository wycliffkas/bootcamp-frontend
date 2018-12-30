import { FETCH_QUESTIONS, FETCH_QUESTION } from '../actions/types';

const initialState = {
    questions: [],
    question: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            };
        case FETCH_QUESTION:
            return {
                ...state,
                question: action.payload
            }
        default:
            return state;
    }
}