import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import './App.css';
import Home from './containers/Home/Home';
import SignIn from './containers/Signin/SignIn';
import Signup from './containers/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions/authActions';

function App() {
  const loginState = useSelector((state) => state.loginState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginState.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, loginState.authenticate]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
