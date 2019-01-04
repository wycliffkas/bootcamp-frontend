import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import GetAllQuestions from './GetAllQuestions';
import GetSingleQuestion from './GetSingleQuestion';
import Register from './Register';
import Login from './Login';

const App = () => (
    <div>
        <Header /> 
        <div className="container">
            <Switch>
                <Route exact path="/" component={GetAllQuestions} />
                <Route exact path="/questions/:id" component={GetSingleQuestion} /> 
                <Route exact  path="/register" component={Register} />  
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
        <Footer />
    </div>
);

export default App;
