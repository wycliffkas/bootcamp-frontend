import toastr from "toastr";
import { FETCH_QUESTIONS, FETCH_QUESTION, LOGIN_USER, LOGIN_USER_FAIL, LOG_OUT, REGISTER_USER_FAIL, REGISTER_USER, ADD_QUESTION, ADD_QUESTION_FAIL} from './types';

export const alert=(type,errorMsg,username, access_token, url)=>{
    if(type === "error" || "success"  && !username && !access_token){
      type === "success" ? toastr.success(errorMsg) && 
      setTimeout(() => window.location.replace(url), 3000): toastr.error(errorMsg) && setTimeout(() => window.location.replace(url), 3000);
    }
    else if(type==="success" && !errorMsg){
      toastr.success(`Logging in as ${username}!`);
      localStorage.setItem("token", access_token);
      localStorage.setItem("username", username);
      setTimeout(() => window.location.replace(url), 3000);
    };
  
};

export const fetchQuestions = () => dispatch => {
    return fetch('https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_QUESTIONS,
        payload: data
    }))

};

export const fetchQuestion = (id) => dispatch => 
fetch(`https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions/${id}`, {
    method: "GET",
    headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-type": "application/json"
    }
})
.then((res) => {
let result;
result = res.json();
result.then(response =>{
dispatch({ type: FETCH_QUESTION, payload: response });
});
});

export const registerUser = (user) => dispatch => 
 fetch('https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/auth/signup', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(res =>{
    const response = res.json();
    if (res.status === 201) {
        response.then(reponse =>
        dispatch({ type: REGISTER_USER, payload: reponse }));
    } else {
        response.then(reponse =>
        dispatch({ type: REGISTER_USER_FAIL, payload: reponse }));
    }
})

export const loginUser = (user) => dispatch => {
    return fetch('https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res =>{
        const response = res.json();
        if (res.status === 200) {
            response.then(response =>{
            localStorage.setItem("token", response.access_token);
            dispatch({ type: LOGIN_USER, payload: response })});            
        } else {
            response.then(response =>
            dispatch({ type: LOGIN_USER_FAIL, payload: response }));
        }
    })
};


export const logOut = () => dispatch =>{
    localStorage.removeItem("token");
    return dispatch({
      type: LOG_OUT,
      payload: "Successfully logged out"
    });
};

export const addNewQuestion = (question) => dispatch => {
    return fetch('https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        body: JSON.stringify(question)
    })
    .then(res => {
        const resp = res.json();
        if (res.status === 201) {
            resp.then(response =>
            dispatch({ type: ADD_QUESTION, payload: response }));
        } else {
            resp.then(response =>
            dispatch({ type: ADD_QUESTION_FAIL, payload: response }));
        }
    })
};


