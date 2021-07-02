import './scss/main.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';
import Logout from './components/logout';
import {AuthProvider} from "./contexts/AuthContext"
import Dashboard from './components/dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path ='/login' component={Login}/>
        <Route path ='/registration' component={Registration}/>
        <Route path ='/logout' component={Logout}/>
        <PrivateRoute path ='/oddam-rzeczy' component={Dashboard}/>
        </Switch>
    </AuthProvider>
    </Router>

  );
};

export default App;
