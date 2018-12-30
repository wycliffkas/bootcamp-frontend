import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/questions';

class  Register extends Component {

   constructor(props){
       super(props);
       this.state = {
           fullname: '',
           username: '',
           email: '',
           password: ''
       }
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };

        this.props.registerUser(user);

    }


    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                <div className="top">
                    <h3>Register User</h3>
                </div>
                <div className="form-area">
                    <div className="group">
                    <input type="text" className="form-control" name="fullname" value={this.state.fullname} onChange={this.onChange} placeholder="Names" required/>
                    </div>                
                    <div className="group">
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange} placeholder="Username" required/>
                    </div>
                    <div className="group">
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required/>
                    </div>                    
                    <div className="group">
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required/>
                    </div>                  
                    <button type="submit" className="btn btn-default btn-block">Save</button>                  
                </div>

                </form>
            </div>
        );
    };
}

// export default connect(null, { registerUser })(Register);
const mapStateToProps = state => ({
    question: state
  });
  
  export const mapDispatchToProps = dispatch => ({
    register: data => dispatch(register(data))
  });
  
  export { Register };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register);

