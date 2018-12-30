import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchQuestion } from '../actions/questions';
import "../App.css";

class getSingleQuestion extends Component {

    componentWillMount(){
        const { match, fetchQuestion} = this.props;
        const { id } = match.params;
        fetchQuestion(id);
    }


    render() {
        const { question } = this.props;
        const questionItem = question => (
            <div className="panel panel-default">
                <NavLink to={{pathname: `/questions/${question.questionId}`}}>
                    <h4>{question.question}</h4>
                </NavLink>
                <p>{question.description}</p>
                <b>Author:</b> {question.author}
            </div>
        );
        return (
            <div>
                <h3>Question</h3>
                { questionItem(question) }
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    question: state.questions.question,
});

export default connect(mapStateToProps, { fetchQuestion })(getSingleQuestion);