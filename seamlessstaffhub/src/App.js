
import './App.css';
import Header from './components/Header';
import HRCloud from './components/HRCloud';
import Register from './components/RegesterFarm';
import Home from "./components/Home";
import Recruiting from './components/Recruiting';
import LoginFarm from './components/LoginFarm';
import Admin from "./components/Admin"
import EditUser from "./components/EditUser"
import HRRegister from './components/HRRegester';
import ProtectedRoute from './components/ProtuctedRoute';

import { BrowserRouter, Route, Switch } from "react-router-dom"


const  App = () => {

  
  return (
    <BrowserRouter>
    <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/HRCloud" exact component={HRCloud} />
          <Route path="/Recruiting" exact component={Recruiting} />
          <Route path="/Regester" exact component={Register} />
          <Route path="/Login" exact component={LoginFarm} />
          <ProtectedRoute path="/admin" exact component={Admin} />
          <Route path="/edit/:id" exact component={EditUser} />
          <ProtectedRoute path="/hrr" exact component={HRRegister} />
        </Switch>
    </BrowserRouter>
    )
}

export default App;
