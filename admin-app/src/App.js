import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import './App.css';
import Home from './containers/Home/Home';
import SignIn from './containers/Signin/SignIn';
import Signup from './containers/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
