import { FETCH_QUESTIONS } from './types';

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
}