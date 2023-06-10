import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfilePage from './ProfilePage';
import ProfileDetailsPage from './ProfileDetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/profile-details" component={ProfileDetailsPage} />
      </Switch>
    </Router>
  );
};

export default App;
