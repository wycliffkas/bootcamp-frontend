import toastr from "toastr";
import { FETCH_QUESTIONS, FETCH_QUESTION, LOGIN_USER, LOGIN_USER_FAIL, REGISTER_USER_FAIL, REGISTER_USER} from './types';
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
    fetch('https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res =>{
        const response = res.json();
        if (res.status === 200) {
            response.then(reponse =>{
            localStorage.setItem("token", response.token);
            dispatch({ type: LOGIN_USER, payload: response })});
        } else {
            response.then(response =>
            dispatch({ type: LOGIN_USER_FAIL, payload: response }));
        }
    })
};


