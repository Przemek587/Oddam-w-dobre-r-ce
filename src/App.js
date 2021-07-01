import './scss/main.scss';
import {HashRouter,Route,Link,Switch,NavLink,} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';
import Logout from './components/logout';

function App() {
  return (
    <HashRouter>
      <Switch>
      <Route exact path ='/' component={Home}/>
      <Route path ='/login' component={Login}/>
      <Route path ='/registration' component={Registration}/>
      <Route path ='/logout' component={Logout}/>
      </Switch>
    </HashRouter>

  );
};

export default App;
