import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/questions';

class  Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
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
            username: this.state.username,
            password: this.state.password
        };

        this.props.loginUser(user);
    }


    render(){
        return (
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                <div className="top">
                    <h3>LOGIN</h3>
                </div>
                <div className="form-area">
                    <div className="group">
                    <input type="text" className="form-control"  name="username"  value={this.state.username} onChange={this.onChange} placeholder="Username"/>
                    <i className="fa fa-user"></i>
                    </div>
                    <div className="group">
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password"/>
                    <i className="fa fa-key"></i>
                    </div>
                    <button type="submit" className="btn btn-default btn-block">Submit</button>
                    <div className="checkbox checkbox-primary">
                    <br/>
                    <a href="/register">Register Now</a>
                    </div>                    
                </div>
                </form>
            </div>
        );
    };
}

export const mapDispatchToProps = dispatch => ({
    loginUser: data => dispatch(loginUser(data))
  });
  export { Login };
  
  export default connect(
    null,
    mapDispatchToProps
  )(Login);
