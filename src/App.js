import './scss/main.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';
import Logout from './components/logout';
import Form from './components/form';
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  
  return (
      <AuthProvider>
    <Router>
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path ='/login' component={Login}/>
        <Route path ='/registration' component={Registration}/>
        <Route path ='/logout' component={Logout}/>
        <Route path ='/oddaj-rzeczy' component={Form}/>
        </Switch>
    </Router>
    </AuthProvider>

  );
};

export default App;
