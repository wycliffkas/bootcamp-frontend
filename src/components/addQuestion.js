import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewQuestion } from '../actions/questions';

class AddQuestion extends Component {

    constructor(props){
       super(props);
       this.state = {
           title: '',
           description: ''
       }

       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
       
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const question = {
            question: this.state.title,
            description: this.state.description,
        };

        this.props.addNewQuestion(question);

    }   

    render(){
        return (
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                <div className="top">
                    <h3>Add a Question</h3>
                </div>
                <div className="form-area">
                    <div className="group">
                    Title
                    <input type="text" className="form-control"  name="title"  value={this.state.title} onChange={this.onChange} required/>
                    </div>
                    <div className="group">
                    Description
                    <textarea className="form-control-other" rows="3" name="description" value={this.state.description} onChange={this.onChange} required></textarea>
                    </div>                                      
                    <button type="submit" className="btn btn-default btn-block">Submit</button>                  
                </div>
                </form>
            </div>
        );

    };
}


export const mapStateToProps = state => ({
    question: state.questions.question
  });
  
  export const mapDispatchToProps = dispatch => ({
    addNewQuestion: data => dispatch(addNewQuestion(data))
  });
  export { AddQuestion };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddQuestion);