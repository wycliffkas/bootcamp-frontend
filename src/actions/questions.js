import { FETCH_QUESTIONS, FETCH_QUESTION } from './types';

export const fetchQuestions = () => dispatch => {
    return fetch('https://stack-challenge3.herokuapp.com/stack_overflow/api/v1/questions')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_QUESTIONS,
        payload: data
    }))
    .catch(function(error){
        console.log('error', error.message);
    });

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

