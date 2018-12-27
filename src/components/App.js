import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import GetAllQuestions from './GetAllQuestions';

const App = () => (
    <div>
        <Header /> 
        <div className="container">
            <Switch>
                <Route exact path="/" component={GetAllQuestions} />
            </Switch>
        </div>
        <Footer />
    </div>
);

export default App;