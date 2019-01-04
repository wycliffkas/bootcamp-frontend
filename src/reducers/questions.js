import { FETCH_QUESTIONS, FETCH_QUESTION, REGISTER_USER, REGISTER_USER_FAIL, LOGIN_USER, LOGIN_USER_FAIL, ADD_QUESTION, ADD_QUESTION_FAIL, LOG_OUT} from '../actions/types';
import { alert } from "../actions/questions";

const initialState = {
    questions: [],
    question: {},
    user: {}
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
        case REGISTER_USER:
            alert("success", "Successfully Registered ....Redirecting", null, null, "/login");
            return {
                ...state,
                user: action.payload
            }
        case REGISTER_USER_FAIL:
            alert("error", action.payload.message, null, null, null);
            return {
                ...state,
                user: action.payload
            }  
        case LOGIN_USER:
            alert("success", "Successfully Loggedin", null, null, "/");
            return {
                ...state,
                user: action.payload
            }    
        case LOGIN_USER_FAIL:
            alert("error", action.payload.message, null, null, "/login");
            return {
                ...state,
                user: action.payload
            }  
        case LOG_OUT:
            alert("success", action.payload, null, null, "/");
            return {
              ...state,
              response: action.payload
            };            
        case ADD_QUESTION:
            alert("success", "Question was Successfully Added", null, null, "/");
            return {
                ...state,
                question: action.payload
            }    
        case ADD_QUESTION_FAIL:
            alert("error", action.payload.message, null, null, "/addQuestion");
            return {
                ...state,
                question: action.payload
            }                                           
        default: return { ...state };
    }
}