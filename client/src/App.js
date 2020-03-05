import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/login/loginPage';
import QuestionPage from './components/questions/questionPage';
import LearningPage from './components/learning/learningPage';
import Customer from './components/customers/customers';

const User = () => {
  return (
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/question" component={QuestionPage} />
        <Route exact path="/learning" component={LearningPage} />
      </Switch>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" component={User} />
          </Switch>
      </Router>
    )
  }
}

export default App;
