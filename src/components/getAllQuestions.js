import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { fetchQuestions } from '../actions/questions';
import "../App.css";

class GetAllQuestions extends Component {

    componentWillMount(){
        this.props.fetchQuestions();
    }

    
    render() {
        const { questions } = this.props;
        const questionsItems = (questions).map((question) => (
            <div key={question.questionId} className="panel panel-default">
                    
                <NavLink to={{pathname: `/questions/${question.questionId}`}}>
                    <h4>{question.question}</h4>
                </NavLink>
                <p>{question.description}</p>
                <b>Author:</b> {question.author}
            </div>
        ));
        return (
            <div>
                <div>
                    {questions.length > 1 ? 
                    (
                        <div>
                    <h3>All Questions</h3> 
                    <div>{questionsItems}</div>
                    </div>
                    )
                    : <div className="text-center">
                    <img
                      src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
                      className="loading__image"
                      alt=""
                    />
                  </div> }
                </div>
               
                
            </div>
        )
        

    }
}


export const mapStateToProps = state => ({
    questions: state.questions.questions,
});

export const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});

export { GetAllQuestions };
export default connect(mapStateToProps, mapDispatchToProps)(GetAllQuestions);