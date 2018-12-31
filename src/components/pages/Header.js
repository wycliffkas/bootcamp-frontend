import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/questions';

const Header = (props) => {

	let token = localStorage.getItem("token");
	const onClick = () =>{
		props.logOut();
	};

	// if(!token) {
	// 	return (
	// 		<nav className="navbar navbar-inverse">
	// 		<div className="container-fluid">
	// 		<div className="navbar-header">
	// 			<NavLink className="navbar-brand" to="/">Stack Overflow Lite</NavLink>
	// 		</div>   

			
	
	// 		</div>
	// 		</nav>
	// 	);		
	// }
	// else {
		return (
			<nav className="navbar navbar-inverse">
			<div className="container-fluid">
			<div className="navbar-header">
				<NavLink className="navbar-brand" to="/">Stack Overflow Lite</NavLink>
			</div>   
		{
			!token
			?(<ul className="nav navbar-nav navbar-right">
			<li><NavLink to="/register"> Register</NavLink></li>
			<li><NavLink to="/login"> Login</NavLink></li>   			
		</ul>)
			: (
				<div>	<ul className="nav navbar-nav navbar-left">
			<li><NavLink to="/addQuestion">Add Question</NavLink></li>
		</ul>

		<ul className="nav navbar-nav navbar-right">
			<li><a href="#" id="logOut" onClick={() => onClick()}>Logout</a></li>   				
		</ul>
		</div>) 
		}
			</div>
			</nav>
		);			
	// }

};
export { Header }

export default connect(null, { logOut })(Header);