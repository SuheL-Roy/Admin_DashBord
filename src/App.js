import React from 'react'
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import './app.css'
import Home from './Pages/home/Home';
import UserList from './Pages/UserList/UserList';
import User from './Pages/user/User';
import NewUser from './Pages/newUser/NewUser';
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';
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
       
        <Route path="/user/:userId">
          <User/>
        </Route>
        <Route path="/newUser">
          <NewUser/>
        </Route>
        <Route path="/products">
          <ProductList/>
        </Route>
        <Route path="/product/:productId">
          <Product/>
        </Route>
        <Route path="/newproduct">
          <NewProduct/>
        </Route>
      </Switch>
        
    </div>
    </Router>
  );
}

export default App;
