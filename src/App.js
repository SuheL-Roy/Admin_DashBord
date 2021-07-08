import React from 'react'
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import './app.css'
import Home from './Pages/home/Home';
import UserList from './Pages/UserList/UserList';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router >
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/users">
          <UserList/>
        </Route>
         
      </Switch>
        
    </div>
    </Router>
  );
}

export default App;
